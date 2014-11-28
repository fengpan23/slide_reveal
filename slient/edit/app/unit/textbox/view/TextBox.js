define(["../../ComponentView",
		"app/deck/ComponentCommands",
		"communal/undo_support/CmdListFactory",
		"communal/interactions/TouchBridge",
		"etch",
		"lang",
	],
	function(ComponentView, ComponentCommands, CmdListFactory, TouchBridge, etch, lang) {
		'use strict';
		var undoHistory = CmdListFactory.managedInstance('editor');
		var styles;
		styles = ["background", "family", "size", "weight", "style", "color", "decoration", "align"];

		var textMinSize = 8;

		/**
		 * @class TextBoxView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: "component textBox",
			tagName: "div",

			/**
			 * Returns list of events, tracked by this view.
			 *
			 * @returns {Object}
			 */
			events: function() {
				var myEvents, parentEvents;
				parentEvents = ComponentView.prototype.events();
				myEvents = {
					"editComplete": "editCompleted",

					"deltadragStart span[data-delta='width']": "widthStart",
					"deltadrag span[data-delta='width']": "width",
					"deltadragStop span[data-delta='width']": "widthStop",
				};
				return _.extend(parentEvents, myEvents);
			},

			/**
			 * Initialize TextBox component view.
			 */
			initialize: function() {
				var style, _i, _len;
				ComponentView.prototype.initialize.apply(this, arguments);
				for (_i = 0, _len = styles.length; _i < _len; _i++) {
					style = styles[_i];
					this.model.on("change:" + style, this._styleChanged, this);
				}
				this.model.on("contentChange", this.editCompleted, this);
				this.model.on("change:text", this._textChanged, this);
				this.model.on("change:link", this._linkChanged, this);
				this.model.on('change:width', this._updateComponentWidth, this);
				this.model.on('change:opacity', this._opacityChanged, this);
				this.model.on('change:lineSpacing', this._lineSpacingChanged, this);
				this.model.on('change:border', this._borderChanged, this);
				this.model.on('change:textColor', this._textColorChange, this);
				this.model.on('change:bgColor', this._bgColorChange, this);
				this._lastDx = 0;
				this.dblclicked = this.dblclicked.bind(this);
				TouchBridge.on.dblclick(this.$el, this.dblclicked);

				this._toolTemplate = JST['unit/textbox/ComponentTool'];
			},

			/**
			 * Render element based on component model.
			 *
			 * @returns {*}
			 */
			render: function() {
				ComponentView.prototype.render.call(this);

				var self = this;
				this.$content.bind('paste', function(e) {
					self._handlePaste(this, e);
				});
				this.$content.html(this.model.get("text"));
				this.$content.css({
					'background': this.model.get("background"),
					'line-height': this.model.get('lineSpacing') || 'normal',
					'width': this.model.get('width'),
				});
				return this.$el;
			},

			_bgColorChange: function(model, color){
				this.$content.css("background", color);
			},

			_textColorChange: function(model, color){
				this.$content.css("color", color);
			},

			_borderChanged: function(model, border){
				border = border || model&&model.get('border') || this.model.get('border');
				this.$content.css({
					"border-color": border.color,
					"border-style": border.style,
					"border-width": border.width,
					"border-radius": border.radius
				});
			},

			_opacityChanged: function(model, opacity){
				this.$content.css("opacity", opacity);
			},

			_lineSpacingChanged: function(model, lineSpacing) {
				this.$content.css("line-height", lineSpacing ||this.model.get('lineSpacing') || 'normal');
			},

			/**
			 * Event:width transformation started.
			 */
			widthStart: function() {
				return this._initialWidth = this.model.get("width") || this.$el.css("width") || 144;
			},
			/**
			 * Event: width transformation is in progress.
			 *
			 * @param {Event} e
			 * @param {{dx: number, dy: number}} deltas
			 */
			width: function(e, deltas) {
				this.model.setFloat("width", this._initialWidth + deltas.dx);
			},

			/**
			 * Event: width transformation stopped.
			 */
			widthStop: function() {
				var cmd = new ComponentCommands.Width(this._initialWidth, this.model);
				undoHistory.push(cmd);
			},

			/**
			 * React on content width.
			 */
			_updateComponentWidth: function(model, width) {
				this.$content.css("width", width);
			},

			/**
			 * Remove component view.
			 *
			 * @param {boolean} disposeModel Whether or not to dispose component's model as well.
			 */
			remove: function(disposeModel) {
				ComponentView.prototype.remove.apply(this, arguments);
				// TODO This can be uncommented once modal windows start blocking all slide key events.
				// $(document).unbind("keydown", this.keydown);
			},

			/**
			 * Event: element is double clicked. Enter editing mode for a textbox.
			 *
			 * @param {Event} e
			 */
			dblclicked: function(e) {
				this.$content.addClass("editable");
				this.$content.attr("contenteditable", true);
				if (e != null) {
					this._initialText = this.$content.html();
					console.time('etch.editableInit');
					etch.editableInit(e);
					// etch.editableInit.call(this, e, this.model.get("y") * this.dragScale + 35);
					console.timeEnd('etch.editableInit');
					// Focus editor and select all text.
					if (!this.editing) {
						this.$content.get(0).focus();
						try {
							document.execCommand('selectAll', false, null);
							// etch.triggerCaret();
						} catch (e) {
							// firefox failboats on this command
							// for some reason.  hence the try/catch
							// console.log(e);
						}
					}
				}
				this.allowDragging = false;
				this.editing = true;
			},

			clicked: function(e){
				if(this.editing){
					this.$content.focus();
				}else{
					ComponentView.prototype.clicked.apply(this, arguments);
				}
			},

			/**
			 * Event: mouse button has peen pressed down, drag started. If in editing mode, move etch to the clicked spot.
			 *
			 * @param {Event} e
			 */
			mousedown: function(e) {
				if (this.editing) {
					// etch.editableInit.call(this, e, this.model.get("y") * this.dragScale + 35);
					// etch.editableInit(e);
				} else {
					ComponentView.prototype.mousedown.apply(this, arguments);
				}
			},

			mousemove: function(e){
				if (this.editing) {
					// etch.triggerCaret();
					// etch.editableInit.call(this, e, this.model.get("y") * this.dragScale + 35);
				}else{
					ComponentView.prototype.mousemove.apply(this, arguments);
				}
			},

			// TODO Add doc (Why do we need to call trigger caret?)
			/**
			 * Event: mouse button has been released.
			 *
			 * @param {Event} e
			 */
			mouseup: function(e) {
				if (this.editing) {
					etch.editableInit(e);
					// etch.triggerCaret();
					// etch.editableInit.call(this, e, this.model.get("y") * this.dragScale + 35);
				}else{
					ComponentView.prototype.mouseup.apply(this, arguments);
				}
			},

			/**
			 * Event: key has been pressed down. If textbox is in focus, and it was a charachter key pressed, then start
			 * typing in the textbox.
			 *
			 * @param {Event} e
			 */
			keydown: function(e) {
				// When user starts typing text in selected textbox, open edit mode immediately.
				if (this.model.get("selected") && !this.editing) {
					if (!e.ctrlKey && !e.altKey && !e.metaKey && String.fromCharCode(e.which).match(/[\w]/)) {
						this.edit();
					}
				}
			},

			/**
			 * Open editor for the textbox.
			 */
			edit: function() {
				var e;
				this.model.set("selected", true);
				e = $.Event("click", {
					pageX: this.model.get("x")
				});
				this.dblclicked(e);
				this.$content.selectText();
			},

			/**
			 * Finish editing and close the editor.
			 */
			editCompleted: function() {
				//remove the empty content of node so can't content empty line.
				// this.$textEl.find('*').each(function(){
				//     if($(this).html() === ""){
				//       return $(this).remove();
				//     }
				// });				

				var text;
				text = this.$content.html();
				// console.log(text.replace(/<[^>]+>/g,""));
				this.editing = false;
				if (text.replace(/<[^>]+>/g, "") === "") {
					// return this.remove();
				} else {
					var cmd = ComponentCommands.Text(this._initialText, this.model);
					undoHistory.push(cmd);

					this.model.set("text", text);
					window.getSelection().removeAllRanges();
					this.$content.attr("contenteditable", false);
					this.$content.removeClass("editable");
					this.allowDragging = true;
				}
				console.log('edit completted');
			},

			

			/**
			 * React on component is being selected. If component have been unselected, hide it's editor, if in editing mode.
			 *
			 * @param {Component} model
			 * @param {boolean} selected
			 * @private
			 */
			_selectionChanged: function(model, selected) {
				ComponentView.prototype._selectionChanged.apply(this, arguments);
				if (!selected && this.editing) {
					this.editCompleted();
				}
			},

			/**
			 * React on component style change. Update CSS classes of the element.
			 *
			 * @param {Component} model
			 * @param {string} style
			 * @param {Object} opts
			 * @private
			 */
			_styleChanged: function(model, style, opts) {
				var key, value, _ref, _results;
				_ref = opts.changes; //model.changed;
				if (!_ref) return;
				for (var i = 0; i < _ref.length; ++i) {
					key = _ref[i];
					value = model.get(key);
					if (value) {
						if (key === "decoration" || key === "align") {
							key = "text" + key.substring(0, 1).toUpperCase() + key.substr(1);
						} else if (key === "size") {
							//adjust the font-size remove height 
							//Height is just for normal display conversion data
							if (this.model.get('height')) {
								this.$content.css('height', '');
								this.model.set('height', null);
							}
							key = "font" + key.substr(0, 1).toUpperCase() + key.substr(1);
							var _this = this;
							$("div,font,span", this.$content).each(function(i, n) {
								var currentsize = $(n).css("font-size");
								var temp = currentsize.substring(0, currentsize.length - 2);
								var _size = parseInt(temp) + _this._increment;
								if (_size < textMinSize) {
									_size = textMinSize;
								}
								$(n).css("font-size", _size);
							});

						} else if (key === "background") {
							this.$content.css('background', this.model.get("background"));
						}
						//this.$el.css(key, style);
					}
				}
			},

			/**
			 * React on component's text change. Update html contents of the text box.
			 *
			 * @param {Component} model
			 * @param {string} text Updated text (HTML code).
			 * @private
			 */
			_textChanged: function(model, text) {
				this.$content.html(text);
			},

			_handlePaste: function(elem, e) {
				e = e.originalEvent;
				document.execCommand('insertText', false, e.clipboardData.getData('text/plain'));
				// var sel = window.getSelection();
				// var range = sel.getRangeAt(0);
				// var text = document.createTextNode(e.clipboardData.getData('text/plain'));
				// range.deleteContents();
				// range.insertNode(text);

				// range.setStartAfter(text);
				// range.setEndAfter(text);

				// sel.removeAllRanges();
				// sel.addRange(range);

				e.preventDefault();
			},

			constructor: function TextBoxView() {
				ComponentView.prototype.constructor.apply(this, arguments);
			}
		});
	});
define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["etchExtension/align"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"etch-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " icon-paragraph-";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n";
  return buffer;
  });

this["JST"]["etchExtension/colorChooser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"color-chooser colorpicker etch-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  });

this["JST"]["etchExtension/defaultButton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"etch-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " icon-";
  if (helper = helpers.button) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.button); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n";
  return buffer;
  });

this["JST"]["etchExtension/fontFamilySelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\n	<button class=\"btn btn-inverse dropdown-toggle btn-small fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></button>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">\n		<li>	\n				<a class=\"宋体\" href=\"#\" data-value=\"'宋体', sans-serif\">宋体</a>\n				<a class=\"楷体\" href=\"#\" data-value=\"'楷体', sans-serif\">楷体</a>\n				<a class=\"黑体\" href=\"#\" data-value=\"'黑体', sans-serif\">黑体</a>\n				<a class=\"魏碑\" href=\"#\" data-value=\"'魏碑', sans-serif\">魏碑</a>\n                  <a class=\"lato\" href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>\n                  <a class=\"leaguegothic\" href=\"#\" data-value=\"'League Gothic', sans-serif\">League Gothic</a>\n                  <a class=\"droidsansmono\" href=\"#\" data-value=\"'Droid Sans Mono', monospace\">Droid Sans Mono</a>\n                  <a class=\"ubuntu\" href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>\n                  <a class=\"abril\" href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>\n                  <a class=\"hammersmith\" href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>\n                  <a class=\"fredoka\" href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>\n                  <a class=\"gorditas\" href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>\n                  <a class=\"pressstart\" href=\"#\" data-value=\"'PressStart2P', cursive\">Press Start 2P</a>\n		</li>\n	</ul>\n</div>";
  });

this["JST"]["etchExtension/fontSizeSelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\n	<button class=\"btn btn-small btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" title=\"Choose the font size\">\n		<span class=\"text fontSizeReadout\">72</span>\n		<span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">\n		<li>\n			<a href=\"#\" data-value=\"144\">144</a>\n			<a href=\"#\" data-value=\"96\">96</a>\n			<a href=\"#\" data-value=\"72\">72</a>\n			<a href=\"#\" data-value=\"64\">64</a>\n			<a href=\"#\" data-value=\"48\">48</a>\n			<a href=\"#\" data-value=\"36\">36</a>\n			<a href=\"#\" data-value=\"24\">24</a>\n			<a href=\"#\" data-value=\"16\">16</a>\n			<a href=\"#\" data-value=\"12\">12</a>\n		</li>\n     </ul>\n</div>";
  });

this["JST"]["header/Header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"head-tool\">\r\n</div>";
  });

this["JST"]["module/addSlide/AddSlide"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal-header\">\r\n	<button class=\"close\">×</button>\r\n	<h3 class=\"title\">create slide</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<div class=\"errors alert-error\"></div>\r\n	<div class=\"template-list\"></div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  });

this["JST"]["module/style/StyleModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<div class=\"errors alert-error\"></div>\r\n	<form class=\"form-inline\">\r\n		<label>";
  if (helper = helpers.prompt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prompt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":&nbsp;</label><input type=\"text\" />\r\n	</form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  return buffer;
  });

this["JST"]["slideSnapshot/draw/ComponentContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "animate-step-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.animate)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-animo=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.animate)),stack1 == null || stack1 === false ? stack1 : stack1.animo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "rotate(";
  if (helper = helpers.rotate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rotate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "skewX(";
  if (helper = helpers.skewX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skewX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "skewY(";
  if (helper = helpers.skewY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.skewY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width), options) : helperMissing.call(depth0, "round", ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.width), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height), options) : helperMissing.call(depth0, "round", ((stack1 = (depth0 && depth0.scale)),stack1 == null || stack1 === false ? stack1 : stack1.height), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px";
  return buffer;
  }

  buffer += "<div class=\"componentContainer ";
  if (helper = helpers.customClasses) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customClasses); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.animate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"top: ";
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.y), options) : helperMissing.call(depth0, "round", (depth0 && depth0.y), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; left: ";
  stack1 = (helper = helpers.round || (depth0 && depth0.round),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.x), options) : helperMissing.call(depth0, "round", (depth0 && depth0.x), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; -webkit-transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotate), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewX), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewY), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; -moz-transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotate), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewX), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewY), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; transform: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rotate), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewX), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.skewY), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; width: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; height: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scale), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\">";
  return buffer;
  });

this["JST"]["slideSnapshot/draw/Image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.src), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<img src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"opacity: ";
  if (helper = helpers.opacity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.opacity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ";\" width=\"";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n	<div class=\"icon-picture\"></div>\r\n";
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["slideSnapshot/draw/TextBox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div class=\"antialias\" style=\"width:";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; height:";
  if (helper = helpers.height) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.height); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; background:";
  if (helper = helpers.background) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.background); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; line-height:";
  if (helper = helpers.lineSpacing) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lineSpacing); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; opacity: ";
  if (helper = helpers.opacity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.opacity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.link), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.link), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"/preview_export/impress.html#/step-";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "</a>";
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["slideSnapshot/draw/Video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<video controls>\r\n	<source src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"";
  if (helper = helpers.srcType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.srcType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" preload=\"metadata\"></source>\r\n</video>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["slideSnapshot/SlideDrawer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n";
  stack1 = (helper = helpers.renderComponent || (depth0 && depth0.renderComponent),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, depth0, "Video WebFrame Audio", options) : helperMissing.call(depth0, "renderComponent", depth0, "Video WebFrame Audio", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.components) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.components); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["slideSnapshot/SlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"thumbnail\">\r\n<div>";
  });

this["JST"]["toolkit/ToolbarList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"toolbar\" data-type=\"add\"></div>\r\n<div class=\"toolbar\" data-type=\"edit\"></div>";
  });

this["JST"]["toolkit/UnitItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"unit-btn\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	<div class=\"";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n	<div>";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n</div>";
  return buffer;
  });

this["JST"]["unit/audio/ComponentTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<span class=\"tl mark\" data-delta=\"width\"></span>\r\n<span class=\"tc mark\" data-delta=\"rotate\"></span>\r\n<span class=\"tr mark\" data-delta=\"rotate\"></span>\r\n<span class=\"cl mark\" data-delta=\"scale\"></span>\r\n<span class=\"cr mark\" data-delta=\"scale\"></span>\r\n<span class=\"bl mark\" data-delta=\"scale\"></span>\r\n<span class=\"bc mark\" data-delta=\"scale\"></span>\r\n<span class=\"br mark\" data-delta=\"scale\"></span>";
  });

this["JST"]["unit/image/ComponentTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<span class=\"tl mark\" data-delta=\"size\"></span>\r\n<span class=\"tc mark\" data-delta=\"size\"></span>\r\n<span class=\"tr mark\" data-delta=\"size\"></span>\r\n<span class=\"cl mark\" data-delta=\"size\"></span>\r\n<span class=\"cr mark\" data-delta=\"size\"></span>\r\n<span class=\"bl mark\" data-delta=\"size\"></span>\r\n<span class=\"bc mark\" data-delta=\"size\"></span>\r\n<span class=\"br mark\" data-delta=\"size\"></span>";
  });

this["JST"]["unit/image/ImageTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<div class=\"edit-tool-list\">\r\n	<div class=\"tool-import\">\r\n		<div class=\"status\">\r\n			<span class=\"import\">\r\n				<span class=\"icon-picture\"></span>\r\n				<span class=\"upload-btn\">upload</span>\r\n				<input type=\"file\" title=\"click upload file\" accept=\"image/*\"/>\r\n			</span>\r\n			<span class=\"progress\"></span>\r\n			<span class=\"replace\"></span>\r\n		</div>\r\n		<div class=\"content\">\r\n			<img src=\"";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["unit/Component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content\" style=\"border:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.style)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; border-radius: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.radius)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px;\"></div>\r\n<div class=\"component-tool\"></div>\r\n";
  return buffer;
  });

this["JST"]["unit/ComponentTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<div class=\"tool-opacity\">\r\n	<div class=\"tool-content\">透明度:<span class=\"opacity-value\">";
  if (helper = helpers.opacity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.opacity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%</span></div>\r\n	<div class=\"tool-slider\"></div>\r\n</div>\r\n<div class=\"tool-border\">\r\n	<div class=\"tool-content\">边框<span class=\"border-switch\">></span></div>\r\n	<div class=\"border-property\">\r\n		<div class=\"tool-content\">宽度:</div>\r\n		<div class=\"stepper\">\r\n			<input type=\"text\" class=\"stepper-munber\" data-nature=\"border.width\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px\"/>\r\n		</div>\r\n		<div class=\"tool-content\">样式:</div>\r\n		<div class=\"stepper\">\r\n			<div class=\"border-style-select-trigger icon-chevron-down\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.style)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n		</div>\r\n		<div class=\"tool-content\">颜色:</div>\r\n		<div class=\"stepper\">\r\n			<div class=\"color-pick-trigger\" data-nature=\"border.color\" style=\"background: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\"></div>\r\n		</div>\r\n		<div class=\"tool-content\">边角半径:</div>\r\n		<div class=\"stepper\">\r\n			<input type=\"text\" class=\"stepper-munber\" data-nature=\"border.radius\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.border)),stack1 == null || stack1 === false ? stack1 : stack1.radius)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px\"/>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["unit/textbox/ComponentTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<span class=\"cr mark\" data-delta=\"width\"></span>\r\n";
  });

this["JST"]["unit/textbox/TextBoxTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<div class=\"edit-tool-list\">\r\n	<div class=\"tool-text-color\">\r\n		<div class=\"tool-content\">字体颜色:</div>\r\n		<div class=\"color-pick-trigger\" data-nature=\"textColor\" style=\"background:";
  if (helper = helpers.textColor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.textColor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n	</div>\r\n	<div class=\"tool-background-color\">\r\n		<div class=\"tool-content\">背景颜色:</div>\r\n		<div class=\"color-pick-trigger\" data-nature=\"bgColor\" style=\"background:";
  if (helper = helpers.bgColor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bgColor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n	</div>\r\n	<div class=\"tool-linespacing\">\r\n		<div class=\"tool-content\">行间距:</div>\r\n		<div class=\"linespacing-value icon-chevron-down\" data-nature=\"lineSpacing\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lineSpacing), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n	</div>\r\n<div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.lineSpacing) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lineSpacing); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "normal";
  }

  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.attributes) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.attributes); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["unit/video/VideoTool"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"edit-tool-list\">\r\n	<div class=\"tool-opacity\">\r\n		<div class=\"tool-content\">透明度</div>\r\n		<div></div>\r\n	</div>\r\n	<div class=\"tool-border\">\r\n		<div class=\"tool-content\">边框</div>\r\n		<div></div>\r\n	</div>\r\n<div>";
  });

this["JST"]["communal/widgets/ToolbarPanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"toolbar-panel\">\r\n</div>\r\n";
  });

return this["JST"];

});
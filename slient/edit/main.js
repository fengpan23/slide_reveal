require.config({
	paths : {
		libs 					: '../scripts/libs',
		common			 		: '../scripts/common',
		framework 				: '../scripts/framework',

		lang 					: '../locales/lang',

		css 					: '../scripts/libs/css',
		jquery 					: '../scripts/libs/jQuery',
		jqueryui 				: '../scripts/libs/jqueryui/jquery-ui',
		'jquery.multisortable'	: '../scripts/libs/jquery.multisortable',
		lodash 					: '../scripts/libs/lodash',
		backbone 				: '../scripts/libs/backbone',
		bootstrap 				: '../scripts/libs/bootstrap',
		handlebars 				: '../scripts/libs/Handlebars',

		colorpicker 			: '../edit/component/spectrum/spectrum',
		etch 					: '../edit/component/etch/etch',

		// build - rmap
		'app/config'							: '../edit/app/config',
		'app/deck'                           	: '../edit/app/deck',
		'app/editor'                           	: '../edit/app/editor',
		'app/footer'                           	: '../edit/app/footer',
		'app/header'                           	: '../edit/app/header',
		'app/module'							: '../edit/app/module',
		'app/operatingTable'                   	: '../edit/app/operatingTable',
		'app/slideWell'                        	: '../edit/app/slideWell',
		'app/unit'                        		: '../edit/app/unit',

		communal					   			: '../edit/communal',
		'communal/interactions'					: '../edit/communal/interactions',
		'communal/undo_support'					: '../edit/communal/undo_support',
		// end build - rmap
	},

	shim : {
		bootstrap : {
			deps : ['jquery']
		},

		'jquery.multisortable' : {
			deps : ['jquery', 'jqueryui']
		},

		jqueryui : {
			deps : ['jquery', 'css!scripts/libs/jqueryui/jquery-ui.css']
		},

		colorpicker : {
			deps : ['jquery', 'css!edit/component/spectrum/spectrum.css']
		},

		etch : {
			deps : ['jquery', 'css!edit/component/etch/etch.css']
		}
	}
});

//etch get select
function getSelectionBoundaryElement(win, isStart) {
	var range, sel, container = null;
	var doc = win.document;

	if (doc.selection) {
		// IE branch
		range = doc.selection.createRange();
		range.collapse(isStart);
		return range.parentElement();
	} else if (win.getSelection) {
		// Other browsers
		sel = win.getSelection();

		if (sel.rangeCount > 0) {
			range = sel.getRangeAt(0);
			container = range[ isStart ? 'startContainer' : 'endContainer'];

			// Check if the container is a text node and return its parent if so
			if (container.nodeType === 3) {
				container = container.parentNode;
			}
		}
	}
	return container;
}

require(['libs/backbone',
         'handlebars',
         'bootstrap',
         'app/config/config',
         './features',
         './route/Router',
         './compiled-templates',
         'colorpicker'], 
	function(Backbone, Handlebars, bootstrap, config, registry, Router) {
		'use strict';
	var agent = window.navigator.userAgent;
	
	if (agent.indexOf('WebKit') >= 0)
		window.browserPrefix = '-webkit-';
	else if (agent.indexOf('MSIE') >= 0)
		window.browserPrefix = '-ms-';
	else if (agent.indexOf('Firefox') >= 0)
		window.browserPrefix = '-moz-';
	else
		window.browserPrefix = '';

	Handlebars.registerHelper('either', function(a, b) {
		return b != null ? b : a;
	});

	window.addEventListener('dragover', function(e) {
		e = e || event;
		e.preventDefault();
	}, false);
	window.addEventListener('drop', function(e) {
		e = e || event;
		e.preventDefault();
	}, false);

	var router = new Router(registry);
	Backbone.history.start();
});

define(['etch'],
function(etch) {
    'use strict';
    // _.extend(etch.config.buttonClasses, {
    //     default: [
    //         '<group>', 'bold', 'italic', 'underline', 'strikethrough', '</group>',
    //         '<group>', 'unordered-list', 'ordered-list', '</group>',
    //         '<group>', 'justify-left', 'justify-center', 'justify-right','</group>',
    //         // '<group>', 'link', '</group>',
    //         // 'font-family', 'font-size',
    //         // '<group>', 'color', '</group>',
    //         '<group>', 'clear-formatting', '</group>']
    //     });

    // var noText = [
    //     'link',
    //     'clear-formatting',
    //     'ordered-list',
    //     'unordered-list'
    // ];

    // etch.buttonElFactory = function(button) {
    //     var viewData = {
    //         button: button,
    //         title: button.replace('-', ' '),
    //         display: button.substring(0, 1).toUpperCase()
    //     };

    //     if (noText.indexOf(button) > -1)
    //         viewData.display = '';

    //     switch (button) {
    //         case 'font-size':
    //             return JST['etchExtension/fontSizeSelection'](viewData);
    //         case 'font-family':
    //             return JST['etchExtension/fontFamilySelection'](viewData);
    //         case 'color':
    //             return JST['etchExtension/colorChooser'](viewData);
    //         default:
    //             if (button.indexOf('justify') !== -1) {
    //                 viewData.icon = button.substring(button.indexOf('-')+1, button.length);
    //                 return JST['etchExtension/align'](viewData);
    //             } else {
    //                 return JST['etchExtension/defaultButton'](viewData);
    //             }
    //     }
    // };

    // etch.groupElFactory = function() {
    //     return $('<div class="btn-group">');
    // };

    return {
        initialize: function() {
        }
    }
});
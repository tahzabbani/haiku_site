// // npm install syllable
// var syllable = require('syllable')

// console.log(syllable(""))

$.get("nav.html", function(data) {
    $("#nav-placeholder").replaceWith(data);
});


// make a jquery extension
jQuery.extend(jQuery.expr[':'], {
    focusable: function(el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

// made for "enter" to work to go to the next input
$(document).on('keypress', 'input,select', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});
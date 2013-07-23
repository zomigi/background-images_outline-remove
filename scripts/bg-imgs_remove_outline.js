$(document).ready(function(){
	
	// First attempt below, which worked, but added background-image:none to every tag, not just ones with background images already present
	/*
	function removeBgImgs(){
		$('*').each(function() {
			$(this).css('background-image', 'none');
		});
	}
	*/
	
	// This version first checks if the element has a background image before applying background-image:none
	// Modified code from http://stackoverflow.com/questions/4952337/quickly-select-all-elements-with-css-background-image
	// Not using jQuery so that bookmarklet can stand alone, no dependencies
	function removeBgImgs(){
		var tags = document.getElementsByTagName('*'); // with jQuery it would be  var tags = $('*');
		var element;
	
		for (var i = 0; i<tags.length; i++){
			element = tags[i];
			if (element.currentStyle) { // IE uses "currentStyle" and wants CSS property name in camelCase instead of dashes
				if( element.currentStyle['backgroundImage'] !== 'none' ) 
					element.style.backgroundImage = 'none'; // with jQuery it would be  $(element).css('outline', '2px solid #f00');
			}
			else if (window.getComputedStyle) { // Mozilla, Chrome, and Opera use "getComputedStyle" and want standard CSS property name
				if( document.defaultView.getComputedStyle(element, null).getPropertyValue('background-image') !== 'none' ) 
					element.style.backgroundImage = 'none';
			}
		}
	}
	
	// jQuery used for click event of in-page demo link but not bookmarklet link
	$('#link-remove').click(function() {
		removeBgImgs();
	});
	
	function outlineBgImgs(){
		var tags = document.getElementsByTagName('*');
		var element;
	
		for (var i = 0; i<tags.length; i++){
			element = tags[i];
			if (element.currentStyle) { // IE
				if( element.currentStyle['backgroundImage'] !== 'none' ) 
					element.style.outline = '2px solid #f00';
			}
			else if (window.getComputedStyle) { // Mozilla, Chrome, and Opera
				if( document.defaultView.getComputedStyle(element, null).getPropertyValue('background-image') !== 'none' ) 
					element.style.outline = '2px solid #f00';
			}
		}
	}
	
	$('#link-outline').click(function() {
		outlineBgImgs();
	});

});

// If not using jQuery, here's how you could call the functions from the links:
/*
var x = document.getElementById('link-outline');
x.addEventListener('click', function() {
    outlineBgImgs();
}, false);
*/

// Shorter version:
/*
var y = document.getElementById('link-remove');
y.addEventListener('click', removeBgImgs, false);
*/
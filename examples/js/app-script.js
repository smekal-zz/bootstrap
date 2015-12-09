/*

My Custom JS
============

Author:  Sunil Mekala
Updated: December 2015
Notes:	 Hand coded for learning

*/

$(function(){

	$('#alertMe').click(function(e){

		e.preventDefault();
		$('#successAlert').slideDown();

	});

	$('a.pop').click(function(e){
		e.preventDefault();

	});

	$('a.pop').popover();

// Bootstrap tooltip function
	$("[rel='tooltip']").tooltip();
});
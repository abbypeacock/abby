$(document).ready(function($) {
// jQuery
// var container = document.querySelector('#gallery');
// var msnry = new Masonry( container, {
//     itemSelector: '.gallery-image',
//     // columnWidth: 220,
//     columnWidth: '.item-sizer',
//     percentPosition: true
// });

// msnry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
//     alert("");
// });

// msnry.layout();
// $('#gallery').masonry({
	
// 	itemSelector: '.gallery-image',
	
// });
// Modal before hitting the page

	$('#enter-button').on("click", function(e){
		e.preventDefault();
		$('body').removeClass('hidden');
	});

// Dismiss the modal and show content

// Tabs?
// $('#myTabs a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
});
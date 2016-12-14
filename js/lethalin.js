$(function() {
  $('a[href*="#"]:not([href="#"],[href="#_"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});
$(function () {
    $(".button-modal").click(function() {
		var modalID = this.id;
		var modalTarget = modalID + "-modal";
		$("#"+modalTarget).fadeIn("fast");
    });
});
$(function () {
	$(".overlay").click(function(){
		$('.overlay').fadeOut("fast");
	});                                    
	$(".modal").click(function(e){
	   e.stopPropagation();
	});       
});
$(function () {
	$('.navbar-open').click(function() {
		console.log('toggle nav');
		$('.nav-expand').slideToggle(200);
    });
});
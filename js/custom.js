$( document ).ready(function() {

	if (Modernizr.touch) {
    } else {
    	var BV = new $.BigVideo({container: $('#hero .inner')});
    	BV.init();
     	BV.show('vid/projects.mp4',{ambient:true});
	}


   skrollr.init({forceHeight: false});;


	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 600);
	        return false;
	      }
	    }
	  });
	});

});
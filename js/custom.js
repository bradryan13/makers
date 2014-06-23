$( document ).ready(function() {

    if (Modernizr.touch) {
    } else {
	    var BV = new $.BigVideo({useFlashForFirefox:false, container:$('#hero .inner')});
    	BV.init();
    	BV.show('vid/bg.mp4');
    }

    BV.getPlayer().on('durationchange',function(){
    $('#big-video-wrap').fadeIn();
});

});
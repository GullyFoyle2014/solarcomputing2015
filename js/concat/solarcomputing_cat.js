//Animation Scripts
$( document ).ready(function() {

	    var logo = document.getElementById("logo");
	    var nav = document.getElementById("nav");
	    var solContent = document.getElementById("sol-content");
	    var mainHd = document.getElementById("mainHd");
	    var awardsHd = document.getElementById("awardsHd");
	    var educationHd = document.getElementById("educationHd");
	    var experienceHd = document.getElementById("experienceHd");
	    var toTop = document.getElementById("toTop");
	    
	    TweenMax.fromTo(logo, 0.75, {right:"-32px",opacity:1,scale:0.5,autoAlpha:1, ease: Power4.easeInOut}, {right:"16px",opacity:1,scale:1.0,autoAlpha:1, ease: Circ.easeInOut});
		TweenMax.fromTo([solContent,mainHd,awardsHd,educationHd,experienceHd], 2, {borderColor:"#dbf049", ease: Power4.easeInOut},{borderColor:"#9ab729", ease: Power4.easeInOut,repeat: 1});
		TweenMax.fromTo([nav,solContent], 0.5, {backgroundPosition:"left", ease: Power0.easeInOut},{backgroundPosition:"-300px", ease: Power0.easeInOut},"-=5.0");
		TweenMax.fromTo(mainHd, 0.5, {color:"#fff",marginLeft:-300,opacity:0,autoAlpha:1,ease: Power0.easeInOut},{color:"#666",marginLeft:-1, autoAlpha:1, opacity:1,ease: Power0.easeInOut},"-=0.1");

		//TweenMax.to([solContent], 15, {backgroundPosition:"-300px", ease: Power4.easeInOut},{backgroundPosition:"left", ease: Power4.easeInOut});

});//end doc.ready
$( document ).ready(function() {

    //No links prevent default
    $('.nolink a').click( function(e) {
        e.preventDefault();
    });

    // More Details toggle for resume items
    $('.more-details h5 span').click(function(){
        var link = $(this);
        $(this).parent().parent().children('ul').stop().slideToggle('slow', function() {
            if ($(this).is(':visible')) {
                 link.text('Show Less');
                 $(this).parent().parent().removeClass('hidden');
            } else {
                 link.text('More Details');
                 $(this).parent().parent().addClass('hidden');
            }
        });       
    });

    $( ".more-details h5" ).on( "click", function() {
        $(this).parent().toggleClass('hidden');
    });

    //toggle nav on class styles
    $('.navLink').on('click', function(){
        $('.navLink').removeClass('on');
        $(this).addClass('on');
    });

    //scroll to top
    $('#toTop').click(function(){
        $('#body').animate({
            scrollTop: 0
        }, 1500);
    });

});//end doc.ready
//Animation Scripts

window.onload = function(){
    var logo = document.getElementById("logo");
    var solContent = document.getElementById("sol-content");
    var mainHd = document.getElementById("mainHd");
    var awardsHd = document.getElementById("awardsHd");
    var educationHd = document.getElementById("educationHd");
    var experienceHd = document.getElementById("experienceHd");
    
    TweenMax.to(logo, 1, {right:"32px",opacity:1,scale:1.1,autoAlpha:1, ease: Power4.easeInOut});
	TweenMax.fromTo([solContent,mainHd,awardsHd,educationHd,experienceHd], 2, {borderColor:"#dbf049", ease: Power4.easeInOut},{borderColor:"#9ab729", ease: Power4.easeInOut,repeat: 2});
};
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



});//end doc.ready
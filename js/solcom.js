$( document ).ready(function() {

    // More Details toggle for resume items
    $('.more-details h5 span').click(function(){
        var link = $(this);
        $(this).parent().parent().children('ul').slideToggle('slow', function() {
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

});
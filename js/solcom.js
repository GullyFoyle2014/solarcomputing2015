$( document ).ready(function() {

    //No links prevent default
    $('.nolink a, #menuTab').click( function(e) {
        e.preventDefault();
    });

    var viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var sideNav = document.getElementById('sideNav');
    if( viewportW >= 600){
      $('.navcluster').removeClass('closed').addClass('open');
    }

    //Sort portfolio items


    $('#menuTab').on('click', function(){
      $(this).parent().toggleClass('open');       
      $(this).parent().toggleClass('closed');
      
      // if( $(this).parent().hasClass('closed') ){
      //   //tween background-image color from fff to 000
      //   TweenMax.fromTo( $('#hamburger'), 0.1, {fill: "rgb(255,0,255)"}, {fill: "rgb(0,51,0)"});
      // }
      // else {
      //   TweenMax.fromTo( $('#hamburger'), 0.1, {fill: "rgb(0,51,0)"}, {fill: "rgb(255,0,255)"});
      // }
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

    //header lock
    var stickyOffset = $('.sticky').offset().top;
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
      if (scroll >= stickyOffset) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    //scroll to top
    $('#toTop').click(function(){
        $('#body').animate({
            scrollTop: 0
        }, 1500);
    });

    //portfolio select sort
    $('#typeSelect').on('change', function() {
        
        var portSection = this.value;
        var hearst = $('.portItem.hearst');
        var penton = $('.portItem.penton');
        var freelance = $('.portItem.freelance');
        var spalab = $('.portItem.spalab');
        var oven = $('.portItem.oven');
        var agency = $('.portItem.agency');
        var publishers = $('.portItem.publisher');
        var allClients = [hearst,penton,freelance,spalab,oven,agency,publishers];


          switch( portSection ) {

              case 'all':
                  //show all items
                  console.log("case is all - show all items");
                  break;
              case 'hearst':
                  //show hearst items
                  console.log("case is hearst - show hearst items");
                  $('.portItem').addClass('overflow');
                  $('.portItem.hearst').removeClass('overflow');
                  break;
              case 'penton':
                  //show penton items
                  console.log("case is penton - show penton items");
                  $('.portItem').addClass('overflow');
                  $('.portItem.penton').removeClass('overflow');
                  break;
              case 'freelance':
                  //show freelance items
                  console.log("case is freelance - show freelance items");
                  $('.portItem').addClass('overflow');
                  $('.portItem.freelance').removeClass('overflow');
                  break;
              case 'spalab':
                  //show spalab
                  console.log("case is spalab - show spalab items");
                  $('.portItem').addClass('overflow');
                  $('.portItem.spalab').removeClass('overflow');
                  break;
              case 'oven':
                  //show oven
                  console.log("case is oven - show oven items");
                  $('.portItem').addClass('overflow');
                  $('.portItem.oven').removeClass('overflow');
                  break;
              case 'agency':
                  //show agency work
                  console.log("case is agency work - show agency items (oven, spalab, freelance)");
                  $('.portItem').addClass('overflow');
                  $('.portItem.agency').removeClass('overflow');
                  break;
              case 'publishers':
                  //show publisher work
                  console.log("case is publisher - show publisher work (hearst, penton, freelance, oven");
                  $('.portItem').addClass('overflow');
                  $('.portItem.publisher').removeClass('overflow');
                  break;

              default:
                  //do default
                  //show all as default
                  console.log("case is All/default - show default/all items");
          }


        // console.log( this.value ); 
        // or $(this).val()
    });

});//end doc.ready
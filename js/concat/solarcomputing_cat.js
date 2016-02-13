//Animation Scripts
$( document ).ready(function() {

	(function(){
	    var logo = document.getElementById("logo");
	    var brandBar = document.getElementById("brandBar");
	    var solContent = document.getElementById("sol-content");
	    var mainHd = document.getElementById("mainHd");
	    var awardsHd = document.getElementById("awardsHd");
	    var educationHd = document.getElementById("educationHd");
	    var experienceHd = document.getElementById("experienceHd");
	    var toTop = document.getElementById("toTop");
	    var portFrame = $(".portImg");
	    var sideNav = document.getElementById("sideNav");
	    
	    function mations(){
		    TweenMax.fromTo(logo, 0.75, {right:"-32px",opacity:1,scale:0.5,autoAlpha:1, ease: Power4.easeInOut}, {right:"16px",opacity:1,scale:1.0,autoAlpha:1, ease: Circ.easeInOut});
			TweenMax.fromTo([solContent,mainHd,awardsHd,educationHd,experienceHd], 2, {borderColor:"#9ab729", ease: Power4.easeInOut},{borderColor:"#dbf049", ease: Power4.easeInOut,repeat:2, yoyo:true});
			TweenMax.fromTo([brandBar,solContent], 0.5, {backgroundPosition:"left", ease: Power0.easeInOut},{backgroundPosition:"-300px", ease: Power0.easeInOut},"-=5.0");
			TweenMax.fromTo(mainHd, 0.5, {color:"#fff",marginLeft:-300,opacity:0,autoAlpha:1,ease: Power0.easeInOut},{color:"#666",marginLeft:-1, autoAlpha:1, opacity:1,ease: Power0.easeInOut},"-=0.1");
			
			if( $('.portfolio')){
				TweenMax.fromTo(portFrame, 5.0, {css:{borderColor:"#c7df63"}}, {css:{borderColor:"#8fae15"}, repeat:2,yoyo:true} );
			}	
		
		}//end mations
		mations();

	})();//end animStart


});//end doc.ready
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

        function controlHdrDisplay(){
          //remove filtered section headers from display (may return them as an animated sortable nav state)

        }

          switch( portSection ) {

              case 'all':
                  //show all items
                  console.log("case is all - show all items");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem, .portfolioElem.sortNav').removeClass('overflow');                  
                  break;
              case 'hearst':
                  //show hearst items
                  console.log("case is hearst - show hearst items");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.hearst, .portfolioElem.sortNav').removeClass('overflow');
                  break;
              case 'penton':
                  //show penton items
                  console.log("case is penton - show penton items");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.penton, .portfolioElem.sortNav').removeClass('overflow');
                  break;
              case 'freelance':
                  //show freelance items
                  console.log("case is freelance - show freelance items");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.freelance, .portfolioElem.sortNav').removeClass('overflow');
                  break;
              case 'spalab':
                  //show spalab
                  console.log("case is spalab - show spalab items");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.spalab, .portfolioElem.sortNav').removeClass('overflow');
                  break;
              case 'oven':
                  //show oven
                  console.log("case is oven - show oven items");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.oven, .portfolioElem.sortNav').removeClass('overflow');
                  break;
              case 'agency':
                  //show agency work
                  console.log("case is agency work - show agency items (oven, spalab, freelance)");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.agency, .portfolioElem.sortNav').removeClass('overflow');
                  break;
              case 'publishers':
                  //show publisher work
                  console.log("case is publisher - show publisher work (hearst, penton, freelance, oven");
                  $('.portfolioElem').addClass('overflow');
                  $('.portfolioElem.publishers, .portfolioElem.sortNav').removeClass('overflow');
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
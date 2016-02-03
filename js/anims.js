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

			$('#menuTab').on('click', function(){
				$(this).parent().toggleClass('closed');				
			});
		
		}//end mations
		mations();

	})();//end animStart


});//end doc.ready
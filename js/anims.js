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

    			var viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				if( viewportW >= 960){
						TweenMax.fromTo(portFrame, 5.0, {css:{borderRightColor:"#c7df63"}}, {css:{borderRightColor:"#666"}, repeat:2,yoyo:true} );
						console.log('firing  960-to-desktop animation, border right.');
				}
				else {
						TweenMax.fromTo(portFrame, 5.0, {css:{borderBottomColor:"#c7df63"}}, {css:{borderBottomColor:"#666"}, repeat:2,yoyo:true} );
						console.log('firing  phone to 960 animation, border bottom.');
				}

			}	
		
		}//end mations
		mations();

	})();//end animStart


});//end doc.ready
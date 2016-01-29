//Animation Scripts

window.onload = function(){
/* jshint undef: true, unused: false */
/* global TimelineLite:false, TimelineMax:false, TweenLite:false, TweenMax:false, Back:false, Bounce:false, Circ:false, Cubic:false, Ease:false, EaseLookup:false, Elastic:false, Expo:false, Linear:false, Power0:false, Power1:false, Power2:false, Power3:false, Power3:false, Power4:false, Quad:false, Quart:false, Quint:false, RoughEase:false, Sine:false, SlowMo:false, SteppedEase:false, Strong:false, Draggable:false, SplitText:false, VelocityTracker:false, ThrowPropsPlugin:false, CSSPlugin:false, BezierPlugin:false */


    var logo = document.getElementById("logo");
    var nav = document.getElementById("nav");
    var solContent = document.getElementById("sol-content");
    var mainHd = document.getElementById("mainHd");
    var awardsHd = document.getElementById("awardsHd");
    var educationHd = document.getElementById("educationHd");
    var experienceHd = document.getElementById("experienceHd");
    var toTop = document.getElementById("toTop");
    
    TweenMax.fromTo(logo, 0.75, {right:"-32px",opacity:1,scale:0.5,autoAlpha:1, ease: Power4.easeInOut}, {right:"32px",opacity:1,scale:1.0,autoAlpha:1, ease: Circ.easeInOut});
	TweenMax.fromTo([solContent,mainHd,awardsHd,educationHd,experienceHd], 2, {borderColor:"#dbf049", ease: Power4.easeInOut},{borderColor:"#9ab729", ease: Power4.easeInOut,repeat: 1});
	TweenMax.fromTo([nav,solContent], 0.5, {backgroundPosition:"left", ease: Power0.easeInOut},{backgroundPosition:"-300px", ease: Power0.easeInOut},"-=5.0");
	TweenMax.fromTo(mainHd, 0.5, {color:"#fff",marginLeft:-300,opacity:0,autoAlpha:1,ease: Power0.easeInOut},{color:"#666",marginLeft:-1, autoAlpha:1, opacity:1,ease: Power0.easeInOut},"-=0.1");

	//TweenMax.to([solContent], 15, {backgroundPosition:"-300px", ease: Power4.easeInOut},{backgroundPosition:"left", ease: Power4.easeInOut});
};
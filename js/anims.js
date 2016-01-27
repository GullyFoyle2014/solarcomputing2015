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
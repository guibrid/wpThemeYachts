/******** MOBILE NAVIGATION SLIDER TRIGGER */

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
    
/* Set the width of the side navigation to 0*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 

/* Init Home page slider */
$('.carousel').carousel();

/* Init Animation on Scrool */
AOS.init();

/* Ajuster la hauteur du slider à la hauteur de page sur les desktops */
if($(window).width() >= 992) {
    var sliderHeight = $(window).height() - 80;
    $(".carousel-inner .imgBlock").height(sliderHeight);
}
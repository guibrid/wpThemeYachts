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
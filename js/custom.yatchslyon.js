/******** MOBILE NAVIGATION SLIDER TRIGGER */

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
    
/* Set the width of the side navigation to 0*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 

/* Init Home page, event and prestations slider */
$('.carousel').carousel();

/* Init Animation on Scrool */
AOS.init();

/* Ajuster la hauteur du slider à la hauteur de page sur les desktops */
if($(window).width() >= 992) {
    var sliderHeight = $(window).height() - 80;
    $(".carousel-inner .imgBlock").height(sliderHeight);
}

/* Css pour le menu parent du submenu actif */
$("a.dropdown-item").parents( "li.current-menu-parent" ).find("a.dropdown-toggle").css({"font-weight": "bold", "color": "#c69c6c"});

  /*
  https://github.com/kenwheeler/slick/issues/248
  https://coderwall.com/p/6qaeya/lazy-carousel-in-bootstrap
  $(function() {
    return $(".carousel.lazy").on("slide", function(e, slick, image, imageSource) {
        console.log(mageSource);
        image.attr('src',''); //remove source
        image.css('background-image','url("'+imageSource+'")'); //replace with background instead
      
      var lazy;
      lazy = $(ev.relatedTarget).find("img[data-src]");
      lazy.attr("src", lazy.data('src'));
      lazy.removeAttr("data-src");
    });
  });
  $(".carousel.lazy").on("slide", function(e, slick, image, imageSource) {
    console.log(imageSource);
    image.attr('src',''); //remove source
    image.css('background-image','url("'+imageSource+'")'); //replace with background instead

});*/

/*
  $('.ref-slider').on('lazyLoaded', function (e, slick, image, imageSource) {
        
    image.attr('src',''); //remove source
     image.css('background-image','url("'+imageSource+'")'); //replace with background instead
     image.css('background-size','cover');
     image.css('background-position','center');
     image.css('background-repeat','no-repeat');

 });*/
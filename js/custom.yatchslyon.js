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

/* Init accordion */
$('.collapse').collapse()

/* Reorder cover and text on archives post page for small device */
if($(window).width() <= 768) {
  $('.coverNews').addClass('order-first')
}

/* Init Animation on Scrool */
AOS.init();

/* add button class to newsletter submit */
$('#mailjetSubscriptionForm input[type=submit]').addClass('customButton whiteButton')

//Recupere la hauteur du footer pour definir la margin-bottom du wrapper (sticky footer)
$("div.wrapper").css({"padding-bottom": $(".footer-wrapper").height()});

/*Ajuster la hauteur du slider pour que la home page n'ai pas de scrollbar */
var headerHeight = $("header#masthead").height(); // Hauteur du header
var footerHeight = $(".footer-wrapper").height() - 0.5; // Hauteur du footer (0.5 pour correction)
var homeSliderHeight = $(window).height() - headerHeight - footerHeight; // Hauteur du slider
$(".carousel-inner .imgBlock").height(homeSliderHeight); // Set la hauteur du slider

/* Même chose mais quand on resize pour recalculer dynamiquements les hauteurs des éléments */
$(window).on('resize', function(){
  var headerHeight = $("header#masthead").height()
  var footerHeight = $(".footer-wrapper").height()-0.5;
  var homeSliderHeight = $(window).height() - headerHeight - footerHeight;
  $(".carousel-inner .imgBlock").height(homeSliderHeight);
});

/*Ajuster la hauteur du slider de la page bateau  */
if($(window).width() >= 992) {
$('.boatSlider img').height( $(window).height() - 100 ); 
}

/* Back to the top page button */
var mybutton = document.getElementById("backTopButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$('#backTopButton').click(function(){
  $('html, body').animate({
    scrollTop: $("#page").offset().top
}, 1000);
});


/* Css pour le menu parent du submenu actif */
$("a.dropdown-item").parents( "li.current-menu-parent" ).find("a.dropdown-toggle").css({"font-weight": "bold", "color": "#c69c6c"});


/* Cover overlay video bateau */
$(".js-overlay-start").unbind("click").bind("click", function(e) {
	e.preventDefault();
	var src = $(this).attr("data-url");
    $(".videoCover").hide();
	$(".overlay-video").show();
    $("#player").attr("src", src);
});

/* Append twitter content in div */
$('#lastTweet').append($('#tweetContent').html());

/* set first iten as active in Carousel */
$("div.wp-block-alecaddd-custom-galery div.carousel-item:first-child").addClass( "active" );


$(".wpml-ls-statics-shortcode_actions span:contains('Français')").html("FR");
$(".wpml-ls-statics-shortcode_actions span:contains('Anglais')").html("EN");
$(".wpml-ls-statics-shortcode_actions span:contains('English')").html("EN");
$(".wpml-ls-statics-shortcode_actions span:contains('French')").html("FR");
$(".wpml-ls-statics-shortcode_actions span:contains('Espagnol')").html("ES");
$(".wpml-ls-statics-shortcode_actions span:contains('Español')").html("ES"); 
$(".wpml-ls-statics-shortcode_actions span:contains('Inglés')").html("EN"); 
$(".wpml-ls-statics-shortcode_actions span:contains('Francés')").html("FR");
$(".wpml-ls-statics-shortcode_actions span:contains('Spanish')").html("ES");



//$('.wpml-ls-display').remove();
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
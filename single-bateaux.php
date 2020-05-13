<?php
/**
 * Template Name: Bateau single template
 * Template Post Type: bateaux
 * 
 * 
 **/

get_header();
?>

<div id="primary" class="content-area bateau-page">
	<main id="main" class="site-main">
        
		
            <?php while ( have_posts() ) : the_post(); ?>

                <!-- Header -->
                <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),"full"); ?>
                <div style="background-color:#000000; color:#ffffff">
                    <div class="container-fuild">
                        <div class="row" data-aos="zoom-in">
                            <div class="col">
                                <img src="<?php echo $featured_img_url; ?>" width="100%" />
                            </div>
                        </div>
                        <div class="row" data-aos="zoom-in">
                            <div class="col-xl-8 offset-xl-2 text-center excerpt">
                                <?php the_excerpt(); ?>
                                <?php if (get_field( "lien_reservation" )) { ?><a href="<?php echo get_field( "lien_reservation" ); ?>" target="_blank" class="customButton whiteButton">Réservation <i class="fas fa-chevron-right fa-xs"></i></a><?php } ?>
                                <?php if (get_field( "lien_carte_dabonnement" )) { ?><a href="<?php echo get_field( "lien_carte_dabonnement" ); ?>" target="_blank" class="customButton whiteButton">Carte d'abonnement <i class="fas fa-chevron-right fa-xs"></i></a><?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Header -->

                <!-- Details -->
                <div class="container boatDetails">
                    <?php the_content(); ?>
                </div>
                <!-- End Details -->

                <!-- Galerie et video -->
                <div class="sliderVideo">
                    <div class="container " >

                        <div class="row" data-aos="zoom-in">
                            <div class="col-xl-8 offset-xl-2 video" >

                                <?php get_template_part( 'template-parts/bateau-galery'); ?>

                                <?php get_template_part( 'template-parts/bateau-videoiframe'); ?>

                            </div> 
                        </div><!-- End Slider -->

                    </div>
                </div><!-- End Galerie et video -->
                    

                <?php get_template_part( 'template-parts/bateau-plan'); ?>

            <?php endwhile; // End of the loop. ?>


	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();

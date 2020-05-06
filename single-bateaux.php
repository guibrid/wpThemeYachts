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
                    <div class="container">
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
                    
                    <?php if( acf_photo_gallery('bateau_galerie', $post->ID) ) : ?>
                    <div class="row" data-aos="zoom-in"><!-- Slider -->
                        <div class="col-xl-8 offset-xl-2 " >
                            <?php $images = acf_photo_gallery('bateau_galerie', $post->ID);

                            if( count($images) ){ ?>
                            
                                <div id="bateauCarousel" class="carousel slide boatSlider" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <?php foreach($images as $key => $image){ ?>
                                            <li data-target="#bateauCarousel" data-slide-to="<?php echo $key; ?>" class="<?php if ($key == 0) { echo 'active'; } ?>"></li>
                                        <?php }  ?>
                                    </ol>
                                    <div class="carousel-inner">
                                        <?php foreach($images as $key => $image){ ?>
                                            <div class="carousel-item <?php if ($key == 0) { echo 'active'; } ?>">
                                                <img class="d-block w-100" src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" title="<?php echo $image['title']; ?>" />
                                            </div>
                                        <?php }  ?>
                                    </div>
                                </div>
                            <?php  } ?>
                            </div>
                        
                    </div><!-- End Slider -->
                    <?php endif; ?>

                    <?php if( get_field( "bateau_video" ) ) : ?>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2 video" data-aos="zoom-in" style="margin-top:-1px;">
                            <iframe src="<?php echo get_field( "bateau_video" ); ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
                </div>
                <!-- End Galerie et video -->

                <?php if ( get_field( "plan_du_bateau" ) || get_field( "bateau_lien_plan" ) ) : ?>
                <!-- Configuration -->
                <div class="container configuration">
                    <div class="row">
                        <div class="col-12" data-aos="zoom-in">
                            <div class="text-center title"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/configuration-title.gif" /></div>
                        </div>
                        <div class="col-xl-8 offset-xl-2" data-aos="zoom-in">
                            <div class="text-center imgPlan"><img src="<?php echo get_field( "plan_du_bateau" )['url']; ?>" class="img-fluid" /></div>
                            <p class="text-center"><?php if (get_field( "plan_du_bateau" )) { ?><a target="_blank" href="<?php echo get_field( "bateau_lien_plan" )['url']; ?>" class="customButton blackButton">Télécharger le pdf <i class="fas fa-chevron-right fa-xs"></i></a><?php } ?></p>
                        </div>
                    </div>
                </div>
                <!-- End Configuration -->
                <?php endif; ?>

            <?php endwhile; // End of the loop. ?>
		</div><!-- #container -->

	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();

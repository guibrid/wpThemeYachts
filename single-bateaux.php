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
                <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),"large"); ?>
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
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Header -->

                <!-- Details -->
                <div class="container boatDetails">
                    <div class="row">
                        <div class="col-md-6 col-lg-3 boatBloc" data-aos="zoom-in">
                            <div class="spec">
                            <h4 class="presta">Prestations de bord</h4>
                            <p><?php echo get_field( "bateau_prestations" ); ?></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 boatBloc" data-aos="zoom-in">
                            <div class="spec">
                                <h4 class="capacite">Capacité</h4>
                                <p><?php echo get_field( "bateau_capacite" ); ?></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 boatBloc" data-aos="zoom-in">
                            <div class="spec">
                                <h4 class="caracteristique">Caractéristique</h4>
                                <p><?php echo get_field( "bateau_caracteristiques" ); ?></p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 boatBloc" data-aos="zoom-in">
                            <div class="spec">
                                <h4 class="dispo">Mise à disposition</h4>
                                <p><?php echo get_field( "bateau_mise_a_disposition" ); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Details -->

                <!-- Galerie et video -->
                <div class="container">

                    <?php if( acf_photo_gallery('bateau_galerie', $post->ID) ) : ?>
                    <div class="row" data-aos="zoom-in"><!-- Slider -->
                        <div class="col-12">
                            <?php $images = acf_photo_gallery('bateau_galerie', $post->ID);

                            if( count($images) ){ ?>
                            
                                <div id="bateauCarousel" class="carousel slide" data-ride="carousel">
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
                        <div class="col-12 video" data-aos="zoom-in">
                            <iframe src="<?php echo get_field( "bateau_video" ); ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
                <!-- End Galerie et video -->

                <!-- Configuration -->
                <div class="container configuration">
                    <div class="row">
                        <div class="col-12" data-aos="zoom-in">
                            <div class="text-center title"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/configuration-title.gif" /></div>
                        </div>
                        <div class="col-12" data-aos="zoom-in">
                            <div class="text-center imgPlan"><img src="<?php echo get_field( "plan_du_bateau" )['url']; ?>" class="img-fluid" /></div>
                            <p class="text-center"><?php if (get_field( "plan_du_bateau" )) { ?><a target="_blank" href="<?php echo get_field( "bateau_lien_plan" )['url']; ?>" class="customButton blackButton">Télécharger le pdf <i class="fas fa-chevron-right fa-xs"></i></a><?php } ?></p>
                        </div>
                    </div>
                </div>
                <!-- End Configuration -->

            <?php endwhile; // End of the loop. ?>
		</div><!-- #container -->

	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
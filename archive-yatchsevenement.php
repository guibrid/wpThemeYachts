<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package yatchslyon
 */

get_header();
?>

<div id="primary" class="content-area evenements-page">
	<main id="main" class="site-main">

        <div class="container">

            <div class="row">
                <div class="col-12 text-center"><h1><?php the_title(); ?></h1></div>
            </div>

            <?php 
            $args = [
            'post_type' => 'yatchsevenement',
            'post_status' => 'publish',
            ];

            $my_query = new WP_Query( $args ); ?>

            <?php if ( $my_query->have_posts() ) : $i = 1; ?>

                <?php while ( $my_query->have_posts() ) : $my_query->the_post(); ?>

                    <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),"large"); ?>

                    <?php if ( $i == 1 ) { echo '<div class="row">';}   ?>

                        <div class="col-lg-4 text-center evenement" data-aos="zoom-in">
                            <a href="<?php echo get_the_permalink(); ?>">
                                <div class="img" style="background-image: url(<?php echo $featured_img_url; ?>)"></div>
                                <div class="eventDetails">
                                    <div class="boatName"><?php echo get_field( "nom_du_bateau" ); ?></div>
                                    <div class="eventName"><?php the_title(); ?></div>
                                    <div class="prix"><?php echo get_field( "event_prix" ); ?>€<sup>/pers</sup></div>
                                    <div class="duree">Durée: <b><?php echo get_field( "event_duree" ); ?></b></div>
                                    <div class="boarding">Lieu d'embarquement:<br /><b><?php echo get_field( "event_boarding" ); ?></b></div>
                                </div>
                            </a>
                        </div>

                        <?php
                        $i++; 
                        if ( $i == 4 ) {
                            echo '</div>';
                            $i = 1; 
                        }
                        ?>

                <?php endwhile; ?>

                <?php if ( $i < 4 && $i > 1 ) { echo '</div>' ;} ?>

                <?php wp_reset_postdata(); ?>

            <?php endif; ?>

        </div><!-- #container -->

    </main><!-- #main -->
</div><!-- #primary -->


<?php
get_footer();

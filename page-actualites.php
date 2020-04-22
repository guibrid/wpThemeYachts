<?php 

/* Template Name: Actualités page */ 

get_header();

?>

<div id="primary" class="content-area contact-actu">
	<main id="main" class="site-main">

    <div class="container">

        <div class="row">
            <div class="col-12 text-center"><h1><?php the_title(); ?></h1></div>
        </div>

        <?php 
        $args = array(
            'post_type' => 'post'
        );
        $query = new WP_Query( array( $args ) );

        ?>

        <?php if ( $query->have_posts() ) : ?>

        <?php while ( $query->have_posts() ) : $query->the_post(); ?>

        <div class="row">

        <div class="col-sm-6">
            <?php the_post_thumbnail( array(500, 500) ); ?>
        </div>

        <div class="col-sm-6">
            <h2><?php the_title(); ?></h2>
            <p><?php the_excerpt(); ?></p>
            <p><?php the_date( 'd.m.Y', '<span>', '</span>' ); ?></p>
            <p><a href="#" class="customButton blackButton">En savoir plus <i class="fas fa-chevron-right fa-xs"></i></a></p>
        </div>

        </div>
            
        <?php endwhile; ?>

        <?php wp_reset_postdata(); ?>

        <?php endif; ?>

    </div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
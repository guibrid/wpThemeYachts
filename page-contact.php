<?php 

/* Template Name: Contact page */ 

get_header();

?>

<div id="primary" class="content-area contact-page">
	<main id="main" class="site-main">

    <div class="container">

        <div class="row">
            <div class="col-12 text-center"><h1><?php the_title(); ?></h1></div>
        </div>

        <div class="row">

            <div class="col-sm-6 order-sm-12" id="contactContent">
                <?php if(have_posts()) : while(have_posts()) : the_post(); ?>

                <?php the_content(); ?>

                <?php endwhile;  endif; ?>
            </div>

            <div class="col-sm-6 order-sm-1" id="contactForm">
	
                <?php echo do_shortcode('[contact-form-7 id="20" title="Formulaire de contact"]'); ?>
            
            </div>

        </div>

    </div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
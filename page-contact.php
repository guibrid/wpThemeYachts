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

            <div class="col-sm-6" id="contactForm">
                <h3><?php _e('Demande de devis', 'yachtsLyon_theme'); ?></h3>
                <?php
                    if (ICL_LANGUAGE_CODE == "fr") {
                        $form = '[contact-form-7 id="20" title="Formulaire de contact"]';
                    } else if (ICL_LANGUAGE_CODE == "es") {
                        $form = '[contact-form-7 id="2033" title="Contacto form"]';
                    } else {
                        $form = '[contact-form-7 id="703" title="Contact form"]';
                    }
                    ?>
                
                <?php echo do_shortcode($form); ?>
            </div>

            <div class="col-sm-6" id="contactContent">
                <?php if(have_posts()) : while(have_posts()) : the_post(); ?>

                    <?php the_content(); ?>

                <?php endwhile;  endif; ?>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22274.34300005115!2d4.798466437793285!3d45.74527417910527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebc8069d3ae7%3A0x69ee02dea1f18fa9!2sLES%20YACHTS%20DE%20LYON!5e0!3m2!1sfr!2sfr!4v1592210142160!5m2!1sfr!2sfr" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

        </div>

    </div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
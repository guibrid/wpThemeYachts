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
                <iframe width="100%" scrolling="no" height="350" frameborder="0" src="http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=15+Quai+Rambaud,+69002+Lyon,+Rh%C3%B4ne,+Rh%C3%B4ne-Alpes&sll=45.757643,4.822655&sspn=0.036769,0.104713&g=13+Quai+Rambaud,+69002+Lyon,+Rh%C3%B4ne,+Rh%C3%B4ne-Alpes&ie=UTF8&ll=45.754948,4.820595&spn=0.018388,0.052357&z=14&output=embed&s=AARTsJpzE5f1FpQwSOuHcX5YT2IfIslInQ" marginwidth="0" marginheight="0"></iframe>
            </div>

        </div>

    </div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
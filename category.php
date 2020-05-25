<?php 

/* Template Name: Actualités page */ 

get_header();

?>

<div id="primary" class="content-area actu-page">
	<main id="main" class="site-main">

    <div class="container">
    <div class="row">

        <div class="col-12 text-center">
            <?php $categories = get_the_category(); ?>
             <h1><?php echo $categories[0]->name; ?></h1>
        </div>
    </div>

    <?php $i =1;
    while ( have_posts() ) : 
    
        the_post();

        $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),"large"); 

        $imageBlock = '<div class="col-sm-6" data-aos="zoom-in">
                        <div class="actu-cover" style="background-image: url('.$featured_img_url.')"></div>
                    </div>';

        $contentBlock = '<div class="col-sm-6" data-aos="zoom-in">
                            <h2>'.get_the_title().'</h2>
                            <p class="excerptActu">'.substr(get_the_excerpt(), 0, 350).'...</p>
                            <p class="dateActu">'.get_the_date( "d.m.Y").'</p>
                            <div><a href="'.get_permalink().'" class="customButton blackButton">'.__('En savoir plus', 'yachtsLyon_theme').' <i class="fas fa-chevron-right fa-xs"></i></a></div>
                        </div>';

        if ($i % 2 != 0){
            $article = $imageBlock.$contentBlock;
        } else {
            $article = $contentBlock.$imageBlock;
        }
        $i++; ?>

        <div class="row">

            <?php echo $article;?>

        </div>      

    <?php  endwhile; // End of the loop. ?>


        </div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
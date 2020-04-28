<?php 

/* Template Name: Actualités page */ 

get_header();

?>

<div id="primary" class="content-area actu-page">
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

        <?php if ( $query->have_posts() ) :  $i =1; ?>

        <?php while ( $query->have_posts() ) : $query->the_post(); 

            $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),"large"); 

            $imageBlock = '<div class="col-sm-6" data-aos="zoom-in">
                            <div class="actu-cover" style="background-image: url('.$featured_img_url.')"></div>
                           </div>';

            $contentBlock = '<div class="col-sm-6" data-aos="zoom-in">
                                <h2>'.get_the_title().'</h2>
                                <p class="excerptActu">'.substr(get_the_excerpt(), 0, 350).'...</p>
                                <p class="dateActu">'.get_the_date( "d.m.Y").'</p>
                                <div><a href="'.get_permalink().'" class="customButton blackButton">En savoir plus <i class="fas fa-chevron-right fa-xs"></i></a></div>
                            </div>';

            if ($i % 2 != 0){
                $article = $imageBlock.$contentBlock;
            } else {
                $article = $contentBlock.$imageBlock;
            }
            $i++;
        ?>

            <div class="row">

                <?php echo $article;?>

            </div>
            
        <?php endwhile; ?>

        <?php wp_reset_postdata(); ?>

        <?php endif; ?>

    </div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package yatchslyon
 */

get_header();
?>

	<div id="primary" class="content-area ">
		<main id="main" class="site-main">


		<div class="container actu-page">

			<div class="row" data-aos="zoom-in">
				<div class="col-12 text-center"><h1><?php _e('Actualités', 'yachtsLyon_theme'); ?></h1></div>
			</div>
		<?php while ( have_posts() ) : the_post();

		$categories = get_the_category();

		$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),"large");  ?>
		<div class="row" data-aos="zoom-in">
			<div class="col-12 actu-cover-single" style="background-image: url(<?php echo $featured_img_url; ?>)"></div>
		</div>
		<div class="row" data-aos="zoom-in">
			<div class="col-12 actu-content-single">
				<h2><?php the_title(); ?><br /><span class="line"></span></h2>
				<div class="dateActuSingle"><?php echo get_the_date( "d.m.Y"); ?></div>
				<div class="single-content">
					<?php the_content(); ?>
				</div>
			</div>
		</div>
		<div class="row" data-aos="zoom-in">
		<div class="col-12 text-center">
		<?php if ( ! empty( $categories ) ) {
    		echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '" class="customButton blackButton">'.__('Tous les articles', 'yachtsLyon_theme').' <i class="fas fa-chevron-right fa-xs"></i></a>';
		} ?>

		</div>
		</div>

		<?php endwhile; // End of the loop.
		?>

		</div><!-- #container -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

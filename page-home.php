<?php
/* Template Name: Home page */ 

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div id="slider-homepage">
				<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<?php get_template_part( 'template-parts/content-sliderNews'); ?>
						<?php get_template_part( 'template-parts/content-slider'); ?>
					</div>
				</div>
				</div>
			</div><!-- #slider -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
<?php
/**
 * Template Name: Event single template
 * Template Post Type: yatchsevenement
 * 
 * 
 **/

get_header();
?>

<div id="primary" class="content-area evenements-page">
	<main id="main" class="site-main">

		<div class="container single-event">

			<?php while ( have_posts() ) : the_post(); ?>
			<div class="row eventHeader" data-aos="zoom-in">
				<div class="col-md-6">
					<h2><?php echo get_the_title().' - '.get_field( "event_date" ); ?></h2>
					<p><?php the_excerpt(); ?></p>
				</div>
				<div class="col-md-6 text-right">
					<div class="eventDetails">
						<?php if (get_field( "event_booking_link" )) { ?><a target="_blank" href="<?php echo get_field( "event_booking_link" ); ?>" class="customButton blackButton"><?php _e('Réservez', 'yachtsLyon_theme'); ?> <i class="fas fa-chevron-right fa-xs"></i></a><?php } ?>
						<?php if (get_field( "event_prix" )) { ?><div class="prix"><?php echo get_field( "event_prix" ); ?>€<sup>/pers</sup></div><?php } ?>
						<?php if (get_field( "event_duree" )) { ?><div class="duree"><?php _e('Durée', 'yachtsLyon_theme'); ?>: <b><?php echo get_field( "event_duree" ); ?></b></div><?php } ?>
						<?php if (get_field( "event_boarding" )) { ?><div class="boarding"><?php _e('Lieu d\'embarquement', 'yachtsLyon_theme'); ?>:<b> <?php echo get_field( "event_boarding" ); ?></b></div><?php } ?>
					</div>
				</div>		
			</div>

			<div class="row" data-aos="zoom-in"><!-- Slider -->
				<div class="col-12">
					<?php $images = acf_photo_gallery('event_galerie', $post->ID);

					if( count($images) ){ ?>
					
						<div id="eventCarousel" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<?php foreach($images as $key => $image){ ?>
									<li data-target="#eventCarousel" data-slide-to="<?php echo $key; ?>" class="<?php if ($key == 0) { echo 'active'; } ?>"></li>
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

			<div class="row" data-aos="zoom-in">
				<div class="col-12">
					<?php the_content(); ?>
				</div>
			</div>
		
			<?php endwhile; // End of the loop. ?>
		
			<div class="row" data-aos="zoom-in">
				<div class="col-12 text-center">
					<a href="<?php echo get_home_url(); ?>/evenements/" class="customButton blackButton"><?php _e('Tous les évènements', 'yachtsLyon_theme'); ?> <i class="fas fa-chevron-right fa-xs"></i></a><br /><br />
				</div>
			</div>

		</div><!-- #container -->

	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();

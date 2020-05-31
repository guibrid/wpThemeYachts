<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package yatchslyon
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="error-404 not-found">
				<div class="container">
					<div class="row">
						<div class="col text-center">

						<?php
                    if (ICL_LANGUAGE_CODE == "fr") {
                        $img404 = '404-fr.gif';
                    } else if (ICL_LANGUAGE_CODE == "es") {
                        $img404 = '404-es.gif';
                    } else {
						$img404 = '404-en.gif';
					}
                    ?>
                <img src="<?php echo get_template_directory_uri() . '/img/'.$img404; ?>" class="img-fluid" style="margin:40px 0;" />
						</div>
					</div>
				</div>
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

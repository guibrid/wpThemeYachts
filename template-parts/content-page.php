<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package yatchslyon
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="container">
			<div class="row">
				<div class="col"><?php
		the_content();
		?></div>
			</div>

		


</article><!-- #post-<?php the_ID(); ?> -->

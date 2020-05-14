<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package yatchslyon
 */

?>

	</div><!-- #content -->
	

	<div class="footer-wrapper">
	<div id="sub-footer"><!-- #sub-footer -->
		<div class="container">
			<div class="row">
				<div class="col-lg-6 text-lg-left contact">
					<span>Nous contacter</span><br />
					<a href="<?php echo get_home_url(); ?>/contact/" class="customButton whiteButton">Un devis ? <i class="fas fa-chevron-right fa-xs"></i></a>
				</div>
				<div class="col-lg-6 text-lg-left newsletter">
					<span>Newsletter</span><br />
					<?php echo do_shortcode('[mc4wp_form id="322"]'); ?>
				</div>
			</div>
		</div>
	</div><!-- #sub-footer -->


	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 contactDetails">
					<span> Tél : 04 72 56 51 23<br />Mail : contact@lesyachtsdelyon.com</span>
				</div>
				<div class="col-sm-6 text-right">
					<div class="social">
						<a href="https://www.facebook.com/pages/Les-Yachts-de-Lyon/215000789034" target="_blank">
							<i class="fab fa-facebook-f fa-lg"></i>
						</a>&nbsp;&nbsp;
						<a href="https://www.instagram.com/bateau_l_evasion/?hl=fr" target="_blank">
							<i class="fab fa-instagram fa-lg"></i>
						</a>&nbsp;&nbsp;
						<a href="https://twitter.com/yachtsdelyon" target="_blank">
							<i class="fab fa-twitter fa-lg"></i>
						</a>
					</div>
					<div class="copyright"> &copy;Copyright 2020 | <b>All right reserved PROACTIVE</b><br />Designed by marinemarcolet.com & Webaxis</div>
				</div>
			</div>
		</div>
	</footer><!-- #colophon -->
	</div><!-- #footer wrapper -->
	
</div><!-- #page -->
</div><!-- #warpper -->
<?php wp_footer(); ?>

</body>
</html>

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
				<div class="col-sm-6 text-md-left contact">
					<span><?php _e('Nous contacter', 'yachtsLyon_theme'); ?></span><br />
					<a href="<?php echo get_site_url().'/contact/?lang='.ICL_LANGUAGE_CODE; ?>" class="customButton whiteButton"><?php _e('Un devis ?', 'yachtsLyon_theme'); ?> <i class="fas fa-chevron-right fa-xs"></i></a><br/>
				</div>
				<div class="col-sm-6 text-md-left newsletter">
					<?php if ( is_active_sidebar( 'sidebar-2' ) ) {
						dynamic_sidebar( 'sidebar-2' );
						}
					?>
				</div>
			</div>
		</div>
	</div><!-- #sub-footer -->


	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 contactDetails">
					<span><?php _e('Tél', 'yachtsLyon_theme'); ?> : 04 72 56 51 23<br />E-mail : <a href="mailto:contact@lesyachtsdelyon.com" target="_blank">contact@lesyachtsdelyon.com</a></span>
				</div>
				<div class="col-sm-6 sub-footer">
					<div class="social">
						<a href="https://www.facebook.com/pages/Les-Yachts-de-Lyon/215000789034" target="_blank">
							<i class="fab fa-facebook-f fa-lg"></i>
						</a>
						<a href="https://www.instagram.com/lesyachtsdelyon/?hl=fr" target="_blank">
							<i class="fab fa-instagram fa-lg"></i>
						</a>
						<a href="https://twitter.com/yachtsdelyon" target="_blank">
							<i class="fab fa-twitter fa-lg"></i>
						</a>
						<a href="https://www.linkedin.com/company/les-yachts-de-lyon-evenementiel/" target="_blank">
							<i class="fab fa-linkedin-in fa-lg"></i>
						</a>
					</div>
					<div class="copyright">
						<b>&copy; <script>document.write(new Date().getFullYear())</script> All right reserved PROACTIVE</b>  | 
						<a class="textLink" href="<?php echo site_url('/mentions-legales'); ?>"><?php _e('Mentions légales', 'yachtsLyon_theme'); ?></a><br />Designed by marinemarcollet.com & Webaxis</div>
				</div>
			</div>
		</div>
	</footer><!-- #colophon -->
	</div><!-- #footer wrapper -->
	
</div><!-- #page -->
</div><!-- #warpper -->
<?php wp_footer(); ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-5668797-35"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-5668797-35');
</script>

</body>
</html>

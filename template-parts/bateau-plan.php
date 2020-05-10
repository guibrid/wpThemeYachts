
<?php if ( get_field( "plan_du_bateau" ) || get_field( "bateau_lien_plan" ) ) : ?>
    <!-- Configuration -->
    <div class="container configuration">
        <div class="row">
            <div class="col-12" data-aos="zoom-in">
                <div class="text-center title"><img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/configuration-title.gif" /></div>
            </div>
            <div class="col-xl-8 offset-xl-2" data-aos="zoom-in">
                <div class="text-center imgPlan"><img src="<?php echo get_field( "plan_du_bateau" )['url']; ?>" class="img-fluid" /></div>
                <p class="text-center"><?php if (get_field( "plan_du_bateau" )) { ?><a target="_blank" href="<?php echo get_field( "bateau_lien_plan" )['url']; ?>" class="customButton blackButton">Télécharger le pdf <i class="fas fa-chevron-right fa-xs"></i></a><?php } ?></p>
            </div>
        </div>
    </div>
    <!-- End Configuration -->
<?php endif; ?>
<div class="container-fuild">
  <div class="row">
    <div class="col-6 col-lg-2">
      <a href="<?php echo get_home_url(); ?>">
        <img src="<?php echo get_template_directory_uri() . '/img/logo.png'; ?>" class="logo" />
      </a>
    </div>
    <div class="col-6 col-lg-10" style="text-align:right; position:relative;">

        <!-- site-navigation Desktop -->
          <?php
            wp_nav_menu( array(
                'theme_location'  => 'menu-1',
                'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
                'container'       => 'nav',
                'container_class' => 'main-navigation',
                'container_id'    => 'site-navigation',
                'menu_class'      => 'd-flex',
                'walker'          => new WP_Bootstrap_Navwalker(),
            ) );
          ?>

          <!-- site-navigation Mobile -->
          <nav class="mobile-navigation text-right">  
            
            <!-- sidenav trigger -->
            <span onclick="openNav()" class="burger"><i class="fas fa-bars"></i> MENU</span>

            <div id="mySidenav" class="sidenav">
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
              <?php
                wp_nav_menu( array(
                    'theme_location'  => 'menu-2',
                    'depth'           => 2,
                ) );
              ?>
            </div>

          </nav>
          <div class="langue-switcher"><?php do_action('wpml_add_language_selector'); ?></div>
        

    </div>
  </div>
</div>
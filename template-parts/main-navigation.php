<div class="container">
  <div class="row">
    <div class="col-6 col-md-3">
      <a href="<?php echo get_home_url(); ?>">
        <img src="<?php echo get_template_directory_uri() . '/img/logo.png'; ?>" class="logo" />
      </a>
    </div>
    <div class="col-6 col-md-9">

        <!-- site-navigation Desktop -->
        <nav id="site-navigation" class="main-navigation">
            <ul class="d-flex">
            <li class="p-2 flex-fill text-center"><a href="#">Les bateaux</a></li>
            <li class="p-2 flex-fill text-center dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-exp>
                    Nos préstations
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" href="#">one</li>
                        <li class="dropdown-item" href="#">two</li>
                    </ul></a>
                </li>
            <li class="p-2 flex-fill "><a href="#">Actualités</a></li>
            <li class="p-2 flex-fill "><a href="#">Contact</a></li>
            <li class="p-2 flex-fill "><a href="#">Evènements<br />éphémères</a></li>
            <li class="p-2 flex-fill "><a href="#">FR</a></li>
            </ul>
        </nav>
        
        <!-- site-navigation Mobile -->
        <nav class="mobile-navigation text-right">  
          
          <!-- sidenav trigger -->
          <span onclick="openNav()">MENU</span>

          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>

        </nav>

    </div>
  </div>
</div>
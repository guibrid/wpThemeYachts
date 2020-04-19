<?php 
$args = [
  'post_type' => 'slider',
  'post_status' => 'publish',
  ];

$my_query = new WP_Query( $args ); 

if ($my_query->have_posts()) {?>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

      <ol class="carousel-indicators">
      <?php $i = 0;
        while ( $my_query->have_posts() ) : $my_query->the_post();
        $active = ($i == 0) ? " active" : ""; ?>
        <li data-target="#carouselExampleIndicators" data-slide-to="<?php echo $i; ?>" class="<?php echo $active; ?>"></li>
        <?php $i++;
        endwhile; ?>
      </ol>

      <div class="carousel-inner">

        <?php $i = 0;
        while ( $my_query->have_posts() ) : $my_query->the_post();
            $active = ($i == 0) ? " active" : "";
            $image = get_field('slider_background');
            echo '<div class="carousel-item '.$active.'">';
            if( !empty( $image ) ): ?>
              <img class="d-block" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" width="100%" height="600px">
            <?php endif; 
            echo '<div class="carousel-caption d-none d-md-block">
                  <h5>'.get_field( "slider_titre" ).'</h5>
                  <p>'.get_field( "slider_description" ).'</p>
                  </div>';
            echo '</div>';
            $i++;
        endwhile; ?>

      </div>

      <?php if ($my_query->post_count > 1): ?>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <?php endif; ?>

      <?php wp_reset_postdata(); /* Restore original Post Data */ ?>


    </div>

    <script>
    $('.carousel').carousel()
    </script>

<?php
} // end if have_posts
?>
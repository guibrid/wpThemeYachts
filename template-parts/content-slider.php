<?php 
$args = [
  'post_type' => 'slider',
  'post_status' => 'publish',
  'order_by' => 'date'
  ];

$my_query = new WP_Query( $args ); 

if ($my_query->have_posts()) {?>

    <div id="carouselExampleIndicators" class="carousel slide lazy" data-ride="carousel" data-interval="2000">

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
            /*if( !empty( $image ) ):*/ ?>
              <div class="imgBlock" style="background-image: url('<?php echo esc_url($image['url']); ?>');"></div>
            <?php /*endif; */
            echo '<div class="carousel-caption d-none d-md-block">
                  '.get_field( "slider_content" ).'
                  </div>';
            echo '</div>';
            $i++;
        endwhile; ?>

      </div>

      <?php wp_reset_postdata(); /* Restore original Post Data */ ?>


    </div>

<?php
} // end if have_posts
?>
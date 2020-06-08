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
            $imageDesktop = get_field('slider_background');
            $imageMobile = get_field('image_en_background_mobile');
            echo '<div class="carousel-item '.$active.'">'; ?>
              <div class="imgBlock coverDesktop" style="background-image: url('<?php echo esc_url($imageDesktop['url']); ?>');"></div>
              <div class="imgBlock coverMobile" style="background-image: url('<?php echo esc_url($imageMobile['url']); ?>');"></div>
            <?php 
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
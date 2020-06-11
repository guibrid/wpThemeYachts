<?php 

$args2 = [
'post_type' => 'messages',
'post_status' => 'publish',
];

$my_query2 = new WP_Query( $args2 ); 

if ($my_query2->have_posts()) {

    while ( $my_query2->have_posts() ) : $my_query2->the_post();

        echo '
        <div class="newsblock">
            <div class="news">';
            if (get_field('message_lien')){
                echo '<p><a href="'.get_field('message_lien').'">'.get_the_title().'</a></p>';
            } else {
                echo '<p>'.get_the_title().'</p>';
            };
        echo '<p class="contactSlider"><b><span class="emailNews"><a href="mailto:contact@lesyachtsdelyon.com" target="_blank">contact@lesyachtsdelyon.com</a></span> '. __('Tél', 'yachtsLyon_theme') .' : 04 72 56 51 23</b></p></div></div>';

    endwhile; 
    
}  

wp_reset_postdata(); /* Restore original Post Data */ ?>


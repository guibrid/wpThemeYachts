<?php 

$args2 = [
'post_type' => 'messages',
'post_status' => 'publish',
];

$my_query2 = new WP_Query( $args2 ); 

if ($my_query2->have_posts()) {

    while ( $my_query2->have_posts() ) : $my_query2->the_post();

        echo '<div class="newsblock"><div class="news"> <p>'.get_the_title().'</p>
        <p><b>contact@lesyatchsdelyon.com<br />04 72 56 51 23</b></p></div></div>';

    endwhile; 
    
}  

wp_reset_postdata(); /* Restore original Post Data */ ?>


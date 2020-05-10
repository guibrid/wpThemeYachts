<?php if( get_field( "bateau_video" ) ) : ?>

    <?php if( acf_photo_gallery('bateau_galerie', $post->ID) ) {  $borderCss = 'border-top:0px;'; } else { $borderCss = '';} // Check for CSS border height ?>

    <div class="videoWarpper" style="border:10px solid black;<?php echo $borderCss; ?>">
        <?php $image = get_field('bateau_video_cover');?>

        <!-- take the url from embed share on youtube, be sure to include the &amp;autoplay=1 -->
        <div class="js-overlay-start start videoCover" style="background-image:url('<?php echo esc_url($image['url']); ?>');" data-url="<?php echo get_field( "bateau_video" ); ?>?rel=0&amp;showinfo=1&amp;autoplay=1"></div>

        <div class="overlay-video">
            <iframe id="player" width="100%" height="100%" src="" frameborder="0" allowfullscreen></iframe>
        </div>

    </div>

<?php endif; ?>
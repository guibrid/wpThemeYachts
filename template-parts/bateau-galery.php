<?php if( acf_photo_gallery('bateau_galerie', $post->ID) ) : ?>
                                    
    <?php $images = acf_photo_gallery('bateau_galerie', $post->ID);
    if( count($images) ){ ?>
    
        <div id="bateauCarousel" class="carousel slide boatSlider" data-ride="carousel" style="border:10px solid black" data-interval="2000">
            <ol class="carousel-indicators">
                <?php foreach($images as $key => $image){ ?>
                    <li data-target="#bateauCarousel" data-slide-to="<?php echo $key; ?>" class="<?php if ($key == 0) { echo 'active'; } ?>"></li>
                <?php }  ?>
            </ol>
            <div class="carousel-inner">
                <?php foreach($images as $key => $image){ ?>
                    <div class="carousel-item <?php if ($key == 0) { echo 'active'; } ?>">
                        <img class="d-block w-100" src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" title="<?php echo $image['title']; ?>" />
                    </div>
                <?php }  ?>
            </div>
        </div>
    <?php  } ?>
<?php endif; ?>
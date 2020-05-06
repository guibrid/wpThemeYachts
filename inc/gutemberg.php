<?php
/**
 * Custom Gutenberg functions
 */

function alecaddd_gutenberg_default_colors()
{
    add_theme_support(
        'editor-color-palette',
        array(
            array(
                'name' => 'White',
                'slug' => 'white',
                'color' => '#ffffff'
            ),
            array(
                'name' => 'Black',
                'slug' => 'black',
                'color' => '#000000'
            ),
            array(
                'name' => 'Brown',
                'slug' => 'brown',
                'color' => '#C69C6C'
            )
        )
    );

    add_theme_support(
        'editor-font-sizes',
        array(
            array(
                'name' => 'Normal',
                'slug' => 'normal',
                'size' => 16
            ),
            array(
                'name' => 'Large',
                'slug' => 'large',
                'size' => 24
            )
        )
    );
}
add_action( 'init', 'alecaddd_gutenberg_default_colors' );

function alecaddd_gutenberg_blocks()
{
    wp_register_script( 'custom-cta-js', get_template_directory_uri() . '/build/index.js', 
        array( 'wp-blocks' , 'wp-block-editor', 'wp-components'));

    register_block_type( 'alecaddd/accordion', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/accordion-block', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/bateau-infos-bloc', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/custom-cta', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/custom-cta2', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/custom-titre-style2', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/custom-galery', array(
        'editor_script' => 'custom-cta-js'
    ) );

    register_block_type( 'alecaddd/custom-cta4', array(
        'editor_script' => 'custom-cta-js'
    ) );
}
add_action( 'init', 'alecaddd_gutenberg_blocks' );
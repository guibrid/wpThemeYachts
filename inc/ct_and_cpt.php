<?php
/**
 * CUSTOM POST TYPES AND TAXONOMIES
 */
function custom_tax_cpt() {
 
	// slider taxonomy and CPT start

	$labels_slider = [
		'name'				 => __( 'Sliders' ),
		'singular_name' 	 => __( 'Slider' ),
		'add_new'            => __( 'Ajouter nouveau'),
		'add_new_item'       => __( 'Nouveau slider'),
		'edit_item'          => __( 'Editer slider'),
		'new_item'           => __( 'Nouveau slider'),
		'all_items'          => __( 'Tous les sliders'),
		'view_item'          => __( 'Voir slider'),
		'search_items'       => __( 'Rechercher sliders'),
		'not_found'          =>  __( 'Aucun slider trouvé'),
		'not_found_in_trash' => __( 'Aucun slider trouvé dans la corbeille'), 
		'parent_item_colon'  => '',
		'menu_name'          => __( 'Sliders')
	];

	$args_slider = [
		'labels'             => $labels_slider,
		'public' 			 => true,
		'has_archive' 		 => true,
		'publicly_queryable' => true,
		'show_ui'            => true, 
		'show_in_menu'       => true, 
		'query_var'          => true,
		'has_archive'        => true,
		'rewrite' 			 => array('slug' => 'sliders'),
		'menu_position'      => 3,
		'menu_icon'			 => 'dashicons-images-alt',
		'supports' => array( 'title', 'custom-fields' ),
	];

	register_post_type( 'slider', $args_slider ); // register CP
	
	// slider taxonomy and CPT end
}
add_action( 'init', 'custom_tax_cpt' );
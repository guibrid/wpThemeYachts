<?php
/**
 * yatchslyon functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package yatchslyon
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'yatchslyon_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function yatchslyon_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on yatchslyon, use a find and replace
		 * to change 'yatchslyon' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'yatchslyon', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'yatchslyon' ),
				'menu-2' => esc_html__( 'Mobile', 'yatchslyon' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'yatchslyon_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'yatchslyon_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function yatchslyon_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'yatchslyon_content_width', 640 );
}
add_action( 'after_setup_theme', 'yatchslyon_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function yatchslyon_scripts() {
	wp_enqueue_style( 'yatchslyon-style', get_stylesheet_uri(), array(), _S_VERSION );

	wp_enqueue_style( 'yatchslyon-fontawesome', get_template_directory_uri() .'/css/all.min.css');

	wp_enqueue_style( 'yatchslyon-AnimateOnScroll', 'https://unpkg.com/aos@next/dist/aos.css');

	wp_enqueue_style( 'yatchslyon-main', get_template_directory_uri() .'/css/main.css');

	wp_enqueue_script( 'yatchslyon-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	wp_enqueue_script( 'yatchslyon-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), _S_VERSION, true );
	
	wp_enqueue_script( 'yatchslyon-jquery', get_template_directory_uri() . '/js/jquery-3.5.0.min.js', array(), _S_VERSION, true );
	
	wp_enqueue_script( 'yatchslyon-bootstrapjs', get_template_directory_uri() . '/js/bootstrap.bundle.min.js', array(), _S_VERSION, true );

	wp_enqueue_script( 'yatchslyon-AnimateOnScrolljs', 'https://unpkg.com/aos@next/dist/aos.js', array(), _S_VERSION, true );

	wp_enqueue_script( 'yatchslyon-customjs', get_template_directory_uri() . '/js/custom.yatchslyon.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'yatchslyon_scripts' );

/**
 * Custom post type and custom taxonomy.
 */
require get_template_directory() . '/inc/ct_and_cpt.php';

/**
 * Custom post type and custom taxonomy.
 */
require get_template_directory() . '/inc/gutemberg.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


/**
 * Registers an editor stylesheet for the theme.
 */
// Add backend styles for Gutenberg.
add_action( 'enqueue_block_editor_assets', 'yatchs_add_gutenberg_assets' );

/**
 * Load Gutenberg stylesheet.
 */
function yatchs_add_gutenberg_assets() {
	// Load the theme styles within Gutenberg.
	wp_enqueue_style( 'yatchs-gutenberg', get_theme_file_uri( 'custom-editor-style.css' ), false );
}

/**
 * Register Custom Navigation Walker
 */
function register_navwalker(){
	require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'register_navwalker' );



/**
 * Widget newssletter
 */
function newsletter_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Newsletter' ),
        'id'            => 'sidebar-2',
        'description'   => __( 'Add widgets for your blog here.', 'carbon' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title h5">',
        'after_title'   => '</h2>',
    ) );
}

add_action( 'widgets_init', 'newsletter_widgets_init' );

/**
 * Get Last Twitter
 */
function getTweets($user) {
    $datas = file_get_contents('https://mobile.twitter.com/'.$user);

    preg_match_all('/<div class="tweet-text" data-id="\d*">(.*?)<\/div>/s', $datas, $matchetweets, PREG_SET_ORDER);
 echo $matchetweets[0][0]; 

};




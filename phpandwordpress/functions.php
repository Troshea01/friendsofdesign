<?php
	register_nav_menu('header_menu', 'Header Menu');
	wp_enqueue_script( 'customjs', get_template_directory_uri() . '/js/main.js', array(), $ver = false , true );

	// Add Sidebar Functionality
	if (function_exists('register_sidebar')) {
  	register_sidebar(array('id' => 'sidebar-1'));
	}
?>
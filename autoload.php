<?php
/**
 * Plugin Name: Advanced Block Editor
 * Plugin URI:
 * Description: This plugin adds some useful features to the block editor.
 * Author: Technote
 * Version: 1.0.12
 * Author URI: https://technote.space
 * Text Domain: advanced-block-editor
 * Domain Path: /languages/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( defined( 'ADVANCED_BLOCK_EDITOR' ) ) {
	return;
}

define( 'ADVANCED_BLOCK_EDITOR', 'Advanced_Block_Editor' );

@require_once dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

WP_Framework::get_instance( ADVANCED_BLOCK_EDITOR, __FILE__ );

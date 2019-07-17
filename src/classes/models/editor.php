<?php
/**
 * @author Technote
 * @copyright Technote All Rights Reserved
 * @license http://www.opensource.org/licenses/gpl-2.0.php GNU General Public License, version 2
 * @link https://technote.space/
 */

namespace Advanced_Block_Editor\Classes\Models;

use WP_Framework_Common\Traits\Package;
use WP_Framework_Core\Traits\Hook;
use WP_Framework_Core\Traits\Singleton;
use WP_Framework_Presenter\Traits\Presenter;

if ( ! defined( 'ADVANCED_BLOCK_EDITOR' ) ) {
	exit;
}

/**
 * Class Editor
 * @package Advanced_Block_Editor\Classes\Models
 */
class Editor implements \WP_Framework_Core\Interfaces\Singleton, \WP_Framework_Core\Interfaces\Hook, \WP_Framework_Presenter\Interfaces\Presenter {

	use Singleton, Hook, Presenter, Package;

	/**
	 * enqueue css for gutenberg
	 *
	 * @noinspection PhpUnusedPrivateMethodInspection
	 * @SuppressWarnings(PHPMD.UnusedPrivateMethod)
	 */
	private function enqueue_block_editor_assets() {
		$handle = 'advanced-block-editor';
		$this->enqueue_script( $handle, 'index.min.js', $this->app->editor->filter_packages( [
			'wp-element',
			'wp-plugins',
			'wp-data',
			'wp-edit-post',
			'wp-compose',
			'wp-wordcount',
			'wp-i18n',
		] ), $this->app->get_plugin_version(), false );
		$this->localize_script( $handle, 'abeParams', [
			'translate' => $this->get_translate_data( [
				'Advanced Block Editor setting',
				'Editor width',
				'Wordcount',
				'Set editor width',
				'Set word count type',
				'%d characters',
			] ),
		] );
		$this->enqueue_style( $handle, 'gutenberg.css' );
	}
}

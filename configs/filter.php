<?php
/**
 * @version 0.0.1
 * @author Technote
 * @since 0.0.1
 * @copyright Technote All Rights Reserved
 * @license http://www.opensource.org/licenses/gpl-2.0.php GNU General Public License, version 2
 * @link https://technote.space/
 */

if ( ! defined( 'ADVANCED_BLOCK_EDITOR' ) ) {
	exit;
}

return [
	'\Advanced_Block_Editor\Classes\Models\Editor' => [
		'enqueue_block_editor_assets' => [
			'enqueue_block_editor_assets' => 1,
		],
	],
];
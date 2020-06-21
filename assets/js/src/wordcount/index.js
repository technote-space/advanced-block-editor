import React from 'react';
import { registerPlugin } from '@wordpress/plugins';
import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import './store';
import { getPluginName } from '../common/utils';
import { WordCount, SetWordCountType } from './components';

registerPlugin(getPluginName('wordcount'), {
  render: () => <SetWordCountType/>,
});

domReady(function() {
  document.querySelector('.edit-post-header-toolbar').insertAdjacentHTML('beforeend', '<div class="character-count"></div>');
  render(
    <WordCount/>,
    document.querySelector('.character-count'),
  );
});

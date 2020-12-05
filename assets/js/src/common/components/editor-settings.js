import React from 'react';
import { Fragment } from '@wordpress/element';
import { CheckboxControl, Modal } from '@wordpress/components';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useCallback, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { MODULES } from '../../constant';
import { translate } from '../../common/utils';
import { STORE_NAME } from '../store';

/**
 * @returns {Component} editor settings
 * @constructor
 */
const EditorSettings = () => {
  const [stateChanged, setStateChanged] = useState(false);
  const [isOpened, setIsOpened]         = useState(false);
  const isActive                        = useSelect(select => Object.assign(...Object.keys(MODULES).map(name => ({ [ name ]: select(STORE_NAME).isActive(name) }))), [stateChanged]);
  const { setActive }                   = useDispatch(STORE_NAME);
  const openModal                       = useCallback(() => setIsOpened(true), []);
  const closeModal                      = useCallback(() => setIsOpened(false), []);
  const toggleModuleActive              = name => checked => {
    setActive(name, checked);
    setStateChanged(!stateChanged);
  };
  const title                           = useMemo(() => translate('Advanced Block Editor setting'), []);
  const closeLabel                      = useMemo(() => __('Close'), []);

  return useMemo(() => <Fragment>
    <PluginMoreMenuItem
      onClick={openModal}
    >
      {title}
    </PluginMoreMenuItem>
    {isOpened && <Modal
      title={title}
      closeLabel={closeLabel}
      onRequestClose={closeModal}
    >
      {Object.keys(MODULES).map(name => <CheckboxControl
        key={name}
        label={translate(MODULES[ name ].label)}
        checked={isActive[ name ]}
        onChange={toggleModuleActive(name)}
      />)}
    </Modal>}
  </Fragment>, [isActive, isOpened]);
};

export default EditorSettings;

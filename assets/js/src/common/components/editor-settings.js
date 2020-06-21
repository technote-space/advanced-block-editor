import React from 'react';
import { Fragment } from '@wordpress/element';
import { CheckboxControl, Modal } from '@wordpress/components';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { withSelect, withDispatch } from '@wordpress/data';
import { withState, compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { MODULES } from '../../constant';
import { translate } from '../../common/utils';
import { isModuleActive, toggleModuleActive } from '../utils';

/**
 * @param {boolean} isOpened is opened?
 * @param {function} openModal open modal
 * @param {function} closeModal close modal
 * @param {function} isModuleActive is module active?
 * @returns {Component} editor settings
 * @constructor
 */
const EditorSettings = ({ isOpened, openModal, closeModal, isModuleActive }) => {
  return <Fragment>
    <PluginMoreMenuItem
      onClick={openModal}
    >
      {translate('Advanced Block Editor setting')}
    </PluginMoreMenuItem>
    {isOpened && <Modal
      title={translate('Advanced Block Editor setting')}
      closeLabel={__('Close')}
      onRequestClose={closeModal}
    >
      {Object.keys(MODULES).map(name => <CheckboxControl
        key={name}
        label={translate(MODULES[ name ].label)}
        checked={isModuleActive(name)}
        onChange={toggleModuleActive(name)}
      />)}
    </Modal>}
  </Fragment>;
};

export default compose(
  withState({
    isOpened: false,
  }),
  withSelect(() => ({
    isModuleActive: name => isModuleActive(name),
  })),
  withDispatch((dispatch, { setState }) => ({
    openModal: () => setState({ isOpened: true }),
    closeModal: () => setState({ isOpened: false }),
  })),
)(EditorSettings);

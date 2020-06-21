import React from 'react';
import { Modal, SelectControl } from '@wordpress/components';
import { withState, compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { STORE_NAME } from '../store';
import { translate } from '../../common/utils';
import { isActive, getWordCountTypes } from '../utils';

/**
 * @param {boolean} isOpened is opened?
 * @param {function} setType set type
 * @param {function} openModal open modal
 * @param {function} closeModal close modal
 * @param {string} type type
 * @param {boolean} isActive is active?
 * @returns {*} Word count setting
 * @constructor
 */
const SetWordCountType = ({ isOpened, setType, openModal, closeModal, type, isActive }) => {
  return isActive && <Fragment>
    <PluginMoreMenuItem
      onClick={openModal}
    >
      {translate('Set word count type')}
    </PluginMoreMenuItem>
    {isOpened && <Modal
      title={translate('Set word count type')}
      closeLabel={__('Close')}
      onRequestClose={closeModal}
    >
      <SelectControl
        options={getWordCountTypes()}
        onChange={setType}
        value={type}
      />
    </Modal>}
  </Fragment>;
};

export default compose(
  withState({
    isOpened: false,
  }),
  withSelect(select => ({
    type: select(STORE_NAME).getWordCountType(true),
    isActive: isActive(),
  })),
  withDispatch((dispatch, { setState }) => ({
    setType: (type) => dispatch(STORE_NAME).setType(type),
    openModal: () => setState({ isOpened: true }),
    closeModal: () => setState({ isOpened: false }),
  })),
)(SetWordCountType);

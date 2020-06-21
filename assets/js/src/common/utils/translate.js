import { TRANSLATE_DATA } from '../../constant';

/**
 * @param {string} str target string
 * @returns {*} translated string
 */
export const translate = str => {
  if (str in TRANSLATE_DATA) {
    return TRANSLATE_DATA[ str ];
  }

  return str;
};

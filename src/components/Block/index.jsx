/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import Styles from './index.css';

const Block = ({ picture, text, id, onClick }) => (
  <div className={Styles.wrapper} onClick={() => onClick(id)}>
    <img src={picture} alt={text} />
    <p>{text}</p>
  </div>
);

export default Block;

Block.propTypes = {
  picture: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

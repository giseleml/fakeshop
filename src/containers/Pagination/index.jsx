/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';

import Styles from './index.css';

const Pagination = ({ page, onClickBefore, onClickNext, itemQuantity }) => (
  <div className={Styles.wrapper}>
    {page > 1 && (
      <button type="button" onClick={() => onClickBefore((page -= 1))}>
        go back
      </button>
    )}
    <p className={Styles.page}>Page {page}</p>
    {itemQuantity === 6 && (
      <button onClick={() => onClickNext((page += 1))} type="button">
        next
      </button>
    )}
  </div>
);

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickBefore: PropTypes.func.isRequired,
};

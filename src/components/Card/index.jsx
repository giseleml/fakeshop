import React from 'react';
import PropTypes from 'prop-types';

import Styles from './index.css';

const Card = ({ item, onClose }) => {
  if (!item) {
    return null;
  }

  const { title, picture, price, category, description } = item;

  return (
    <div className={Styles.wrapper}>
      <p className={Styles.category}>Category: {category}</p>
      <img src={picture} alt={title} />
      <p>{description}</p>
      <p className={Styles.price}>${price}</p>
      <button type="button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  },
  onClose: PropTypes.func.isRequired,
};

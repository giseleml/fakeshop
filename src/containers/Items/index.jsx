import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Block from '../../components/Block';
import Card from '../../components/Card';

import Styles from './index.css';

const Items = ({ items }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className={Styles.wrapper}>
      {items &&
        items.map(i => (
          <Block
            key={i.id}
            picture={i.picture}
            text={i.title}
            id={i.id}
            onClick={itemId => setShowCard(itemId)}
          />
        ))}
      {showCard && (
        <Card
          onClose={() => setShowCard(false)}
          item={items.find(i => i.id === showCard)}
        />
      )}
    </div>
  );
};

export default Items;

Items.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

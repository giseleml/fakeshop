import React, { useState, useEffect } from 'react';

import getItems from './api/get-items';

import Header from './containers/Header';
import Items from './containers/Items';
import Pagination from './containers/Pagination';

import Styles from './index.css';

const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  function paginate(array, pageSize, pageNum) {
    return array.slice((pageNum - 1) * pageSize, pageNum * pageSize);
  }

  useEffect(() => {
    const paginatedItems = paginate([...allItems], 6, page);
    setItems(paginatedItems);
  }, [page]);

  useEffect(() => {
    getItems().then(response => {
      if (response) {
        const itemsCopy = [...response];
        setAllItems(response);

        const paginatedItems = paginate(itemsCopy, 6, page);
        setItems(paginatedItems);
      }
    });
  }, []);

  return (
    <div className={Styles.main}>
      <Header />
      <Items items={items} />
      <Pagination
        itemQuantity={items.length}
        page={page}
        onClickBefore={newPageNum => setPage(newPageNum)}
        onClickNext={newPageNum => setPage(newPageNum)}
      />
    </div>
  );
};

export default App;

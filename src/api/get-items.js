import axios from 'axios';

const getItems = () => {
  return axios
    .get(`https://fakestoreapi.com/products`, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(res => {
      return res.data.map(prod => ({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        category: prod.category,
        description: prod.description,
        picture: prod.image,
      }));
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default getItems;

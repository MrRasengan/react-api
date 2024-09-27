import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './productsSlice';

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...product, name, description, price: parseFloat(price), available }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Доступность:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Обновить продукт</button>
    </form>
  );
};

export default EditProduct;
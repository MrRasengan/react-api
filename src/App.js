import React from 'react';
import './App.css';
import Joke from './components/JokeApp';
import CurrencyConverter from './components/CurrencyConverter';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Шутки о Чаке Норрисе</h1>
      <Joke />
      <br></br>
      <h1>Конвертер валют</h1>
      <p>Конвертирует рубли в выбранную вами валюту</p>
      <CurrencyConverter/>
      <br></br>
      <h1>Каталог продуктов</h1>
      <AddProduct />
      <h2>Список продуктов</h2>
      <ProductList />
    </div>
  );
}

export default App;
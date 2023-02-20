import logo from './logo.svg';
import './App.css';
import React from 'react';
import Description from './product/Description';
import Image from './product/Image';
import Product from './product/Product-price';
import Logo from './product/Logo';
import Name from './product/Product-name';
import Button from './product/Button';
function App() {
  return (
    <div className='App'>
      <Logo />
      <Description />
      <Image />
      <Name />
      <Product />
      <Button />
    </div>
  );
}

export default App;

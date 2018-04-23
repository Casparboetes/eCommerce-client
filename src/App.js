import React, { Component } from 'react';
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
//
import './App.css';

const products = [
  {
    id: 1,
    name: 'Handbag',
    price: 1450
  },
  {
    id: 2,
    name: 'Heater',
    price: 550
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <ProductsList />
        <ProductDetails product={ products[0] } />
      </div>
    );
  }
}

export default App;

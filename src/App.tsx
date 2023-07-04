import './App.css';
import Product from './components/Product';
import products from './data';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <ProductsList>
      <Product productInfo={ products } />
    </ProductsList>
  );
}

export default App;

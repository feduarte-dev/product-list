import './App.css';
import Product from './components/Product';
import products from './data';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <ProductsList>
      { products
        .map((product, index) => <Product key={ index } productInfo={ product } />)}
    </ProductsList>
  );
}

export default App;

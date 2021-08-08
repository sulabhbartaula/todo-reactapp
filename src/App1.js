import './App.css';
import Product from './Product';

function App1() {
  return (
    <div className="App">

      <h1>Hello Sulabh</h1>
      <h2 className="error">An error occured.</h2>

      <Product
        name="Iphone"
        desc="Expensive Phone"
        price="1500" />

      <Product
        name="Samsung"
        desc="Budget Phone"
        price="1500" />

      <Product
        name="Mi"
        desc="Powerful phone at good price"
        price="800" />


    </div>
  );
}

export default App1;
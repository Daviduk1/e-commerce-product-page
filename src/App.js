import Navbar from "./components/Navbar";
import ProductShowCase from "./components/ProductShowCase";
import './components/css/product.css'
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductShowCase />
      <ProductDetail />
    </div>
  );
}

export default App;

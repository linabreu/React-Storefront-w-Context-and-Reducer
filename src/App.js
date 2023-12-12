import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
         <Route path="/" element={ <Home/> } />
        <Route path="/shop" element={ <Shop/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/checkout" element={ <Checkout/> } />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

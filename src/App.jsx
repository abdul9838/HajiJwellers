import About from './pages/about/About';
import Contact from './pages/contactus/Contact';
import Earrings from './pages/earrings/Earrings';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rings from './pages/rings/Rings';
import Store from './pages/store/Store';
import Login from './pages/myaccount/Login';
import Error from './pages/error/Error';
import Necklace from './pages/nechlace/Necklace';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact-us" element={< Contact />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/my-account" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

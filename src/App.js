
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import Signup from './Pages/Signup';
import FAQ from './Pages/FAQ';
import Contact from'./Pages/Contact';
import Contactus from'./Pages/Contact_us';

 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/blessingsofcarthage' element={<Shop/>}/>
        <Route path='/products' element={<ShopCategory  category="products"/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/contact_us' element={<Contactus />} /> 
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

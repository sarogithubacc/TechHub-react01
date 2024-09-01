import Navbar from './Components/Navbar/Navbar';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginPage from './Pages/LoginPage';
// import Slider from './Components/Slider/Slider';
import './Components/Slider/Slider.css'
import Footer from './Components/Footer/Footer';
// import Feature from './Components/Feature/Feature';
// import Footer from './Components/Footer/Footer';
import banner_tv from '../src/Components/Assets/banner_tv.png';
import banner_phone from '../src/Components/Assets/banner_phone.png';
import banner_audio from '../src/Components/Assets/banner_audio.png';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      
   
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        
        <Route path='/televisions' element={<ShopCategory  banner={banner_tv} category="televisions" />}></Route>

        <Route path='/mobiles' element={<ShopCategory banner={banner_phone} category="mobiles" />}></Route>
      
        
        <Route path='/audio&gaming' element={<ShopCategory banner={banner_audio} category="audio&gaming"/>}></Route>
        
      
      
        <Route path="/product" element={<Product />}>
                  <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Login' element={<LoginPage />} />
        
      </Routes>
      <Footer />
      </BrowserRouter>
        
    </div>
  );
}

export default App;

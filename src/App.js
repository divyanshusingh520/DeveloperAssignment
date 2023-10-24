import logo from './logo.svg';
import './App.css';
import Loginpage from './Components/Loginpage';
import Signuppage from './Components/Signuppage';
import Header from './Components/Header';
import ProductOverview from './Components/ProductOverview';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from "./Components/Product"
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { MyContext } from './Components/Mycontext';
import { useState } from 'react';



function App() {

  const[cart,setCart]=useState([])
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[product,setProduct]=useState([])
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div className="App">
<MyContext.Provider value={{cart,setCart,selectedCategory, setSelectedCategory,product,setProduct,searchQuery, setSearchQuery}}>
      <BrowserRouter>
      <Header/>
      <Routes>
          {/* <Route path="/" element={Homepage}>Homepage</Route> */}
          <Route path='/' element={<Product/>}></Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/signin" element={<Signuppage/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
       <Route path="/product/:id" element={<ProductOverview/>}></Route>
      </Routes>
      
      </BrowserRouter>
      {/* <Loginpage/> */}
      {/* <Product/> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;

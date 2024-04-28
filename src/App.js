import { Fragment } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './Routes/Home';
import { Route, Routes } from 'react-router-dom';
import Furniture from './Routes/Furniture';
import Shopmain from './Routes/Shopmain';
import Favorite from './Cart/Favorite';
import Aboutusmain from './Routes/Aboutusmain';
import TermsAndconditions from './Routes/TermsAndconditions';
import Error from './Routes/Error';
import FAQ from './Routes/FAQ';
import Singleproduct from './Routes/Singleproduct';
import { Register } from './Routes/Register';
import Login from './Routes/Login';
import './Components/Looding/looding.css'
import Accountme from './Routes/Accountme';
import Blog from './Routes/Blog';
import Singleblog from './Routes/Singleblog';
import Contactus from '../src/Routes/Contactus'
import Ordercompled from './Routes/Ordercompled';
import Cart1 from './Cart/Cart1';
function App() {
  return (

   <Fragment>
   <ToastContainer/>
 <Routes>
   <Route path={'/' }  element={<Home/>}/>
   <Route path={'/Furniture' }  element={<Furniture/>}/>
   <Route path={'/shop' }  element={<Shopmain/>}/>
   <Route path={'/cart'} element={<Cart1/>}/>
   <Route path='/favorite' element={<Favorite/>}/>
   <Route path='/Aboutus' element={<Aboutusmain/>}/>
   <Route   path='/terms' element={<TermsAndconditions/>}/>
   <Route path='shop/:x' element ={<Singleproduct/>}/>
   <Route path='/Register' element={<Register/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/profile' element={<Accountme/>}/>
   <Route path='/faq' element={<FAQ/>}/>
   <Route path='/Blog' element={<Blog/>}/>
   <Route path='/singleBlog' element={<Singleblog/>}/>
   <Route path='/Contactus' element={<Contactus/>}/>
   <Route path='/OrderComplete' element={<Ordercompled/>}/>
   <Route path='/*' element={<Error/>}/>
   </Routes>
  
   </Fragment>
  );
}

export default App;

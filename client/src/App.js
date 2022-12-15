
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Buynow from './component/buynow/Buynow';
import Cart from './component/cart/Cart';
import Footer from './component/footer/footer';
import Navbar from "./component/header/navbar";
import MainComp from './component/home/MainComp';
import Newnav from './component/newNav/Newnav';
import Sign_in from './component/signup_signin/SignIn';
import Signup from './component/signup_signin/SignUp';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Newnav/>
     <Routes>
      <Route path='/' element={<MainComp/>}/>
      <Route path='/login' element={<Sign_in/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/product/:id' element={<Cart/>}/>
      <Route path='/buynow' element={<Buynow/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

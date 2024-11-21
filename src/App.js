import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Blogs from './Pages/Blogs';
import ContactUs from './Pages/ContactUs';
import Store from './components/Store';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useState } from 'react';
import Footer from './components/Footer';
import TermsConditions from './components/TermsConditions';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallary';
import datas from './data/data1';
import FaQs from './components/FaQs';
import MemberShips from './components/MemberShips';
import MemberShipPlans from './components/MemberShipPlans';
import ThankYou from './components/ThankYou';
import ProductDetail from './Pages/ProductDetail';
import pictures from './data/data3';
import OtpPage from './components/OtpPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className='overflow-x-hidden'>


      <Navbar />
      <Routes>
        <Route path='/' element={<Home
          isLoggedIn={isLoggedIn}
          datas={datas}
        />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/store' element={<Store />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/otp' element={<OtpPage/>} />
        <Route path='/terms&conditions' element={<TermsConditions />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/gallary' element={<Gallery pictures={pictures} />} />
        <Route path='/faqs' element={<FaQs />} />
        <Route path='/memberships' element={<MemberShips />} />
        <Route path='/membership+plan' element={<MemberShipPlans />} />
        <Route path='/query+submit' element={<ThankYou />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

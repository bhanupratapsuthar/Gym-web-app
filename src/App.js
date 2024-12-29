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
import MemberShipsFaq from './components/MemberShipsFaq';
import MemberShipPlansInquery from './components/MemberShipPlansInquery';
import ThankYou from './components/ThankYou';
import ProductDetail from './Pages/ProductDetail';
import pictures from './data/data3';
import OtpPage from './components/OtpPage';
import { BlogList } from './components/blog/BlogList';
import { BlogDetail } from './components/blog/BlogDetail';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './auth/ProtectedRoute';
import Cart from './Pages/Cart';

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
        <Route element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
          
          <Route path='/cart' element={<Cart/>}/>
        <Route path='/blogs' element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
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
        <Route path='/memberships' element={<MemberShipsFaq />} />
        <Route path='/membership+plan' element={<MemberShipPlansInquery />} />
        <Route path='/query+submit' element={<ThankYou />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

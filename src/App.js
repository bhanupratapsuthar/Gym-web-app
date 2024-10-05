import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import WorkoutProgram from './components/WorkoutProgram';
import Blogs from './Pages/Blogs';
import ContactUs from './Pages/ContactUs';
import Store from './components/Store';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useState } from 'react';
import Footer from './components/Footer';
import TermsConditions from './components/TermsConditions';
import AboutUs from './components/AboutUs';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className='relative'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/workout' element={<WorkoutProgram />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/store' element={<Store />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/terms&conditions' element={<TermsConditions />} />
        <Route path='/about_us' element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

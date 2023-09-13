import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/authComponents/Profile';
import SignIn from './pages/authComponents/SignIn';
import SignUp from './pages/authComponents/SignUp';
import ForgotPassword from './pages/authComponents/ForgotPassword';
import Offers from './pages/Offers';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    );
};

export default App;

import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import logo from './assets/logo.png';

const App = () => {
    return (
        <BrowserRouter>
            {/* Header Start */}
            <header className='w-full bg-white sm:px-8 px-4 py-4 shadow-2xl shadow-indigo-950/10'>
                <div className='container  flex justify-between items-center'>
                    <Link to={`/`}>
                        <img src={logo} alt='logo' className='w-40 object-contain' />
                    </Link>
                    <Link to={`/create-post`} className='btn-1'>
                        Create
                    </Link>
                </div>
            </header>
            {/* Header End */}
        </BrowserRouter>
    );
};

export default App;

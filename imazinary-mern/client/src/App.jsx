import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import logo from './assets/logo.png';

const App = () => {
    return (
        <BrowserRouter>
            <div className=''>
                {/* Header Start */}
                <header className='relative z-10 w-full bg-white sm:px-8 px-4 py-4 shadow-2xl shadow-indigo-950/10'>
                    <div className='container  flex justify-between items-center'>
                        <Link to={`/`}>
                            <img src={logo} alt='logo' className='w-48 object-contain' />
                        </Link>
                        <Link to={`/create-post`} className='btn-1'>
                            Create
                        </Link>
                    </div>
                </header>
                {/* Header End */}

                {/* Main Area Start */}
                <main className='z-0 bg-gray-50 w-full min-h-[calc(100vh-72px)]'>
                    <div className='container'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/create-post' element={<CreatePost />} />
                        </Routes>
                    </div>
                </main>
                {/* Main Area End */}
            </div>
        </BrowserRouter>
    );
};

export default App;

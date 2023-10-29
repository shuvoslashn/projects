import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { AnchorSection } from "react-anchor-navigation";
import NotFound from "./pages/NotFound";

const App = () => {
    const [onLoader, setOnLoader] = useState(true);
    useEffect(() => {
        window.onload = () => {
            setOnLoader(false);
        };
    }, onLoader);
    return (
        <>
            <AnchorSection id='home'></AnchorSection>
            <Header />
            {onLoader ? (
                <div className='h-[calc(100vh-175px)] flex-col w-full flex justify-center items-center'>
                    <div className='border-r-3 border-black-400 w-24 h-24 bg-[#E3E3FF] animate-ping'></div>
                    <h4 className='text-5xl -mt-16'>Loading</h4>
                </div>
            ) : (
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            )}
            <Footer />
        </>
    );
};

export default App;

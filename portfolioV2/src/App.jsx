import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

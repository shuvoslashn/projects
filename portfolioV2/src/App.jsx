import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { AnchorSection } from "react-anchor-navigation";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <AnchorSection id='home'></AnchorSection>
            <Header />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

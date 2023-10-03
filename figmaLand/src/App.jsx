import React from "react";
import Header from "./components/sections/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/sections/Footer";
import Headroom from "react-headroom";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
    return (
        <>
            <ScrollToTop smooth className='scroll-top' color='#fff' />
            <Headroom>
                <Header />
            </Headroom>
            <Homepage />
            <Footer />
        </>
    );
};

export default App;

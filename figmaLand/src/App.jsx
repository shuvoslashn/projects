import React from "react";
import Header from "./components/sections/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/sections/Footer";
import Headroom from "react-headroom";

const App = () => {
    return (
        <>
            <Headroom>
                <Header />
            </Headroom>
            <Homepage />
            <Footer />
        </>
    );
};

export default App;

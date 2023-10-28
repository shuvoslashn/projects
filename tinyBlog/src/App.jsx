import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ByCategoryPage from "./pages/ByCategoryPage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<HomePage />} />
                <Route
                    path='/category/:categoryID'
                    element={<ByCategoryPage />}
                />
                <Route path='/details/:postID' element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

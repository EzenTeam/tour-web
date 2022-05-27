import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

import LoadTour from "./components/LoadTour";
import PetTravel from "./components/PetTravel";

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" exact={true} element={<Main />} />
                <Route path="/loadtour" element={<LoadTour />} />
                <Route path="/pettravel" element={<PetTravel />} />
            </Routes>
            
            <Footer />
        </>
    );
};

export default App;

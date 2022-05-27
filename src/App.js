import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Travel from "./pages/Travel";
import PetTravel from "./pages/PetTravel";
import LoadTour from "./pages/LoadTour";

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" exact={true} element={<Main />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/pettravel" element={<PetTravel />} />
                <Route path="/loadtour" element={<LoadTour />} />
            </Routes>
            
            <Footer />
        </>
    );
};

export default App;

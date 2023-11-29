import React from "react";
import { Navbar } from "./components/navBar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Category } from "./components/categoryList/Category";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from "./components/detailsPage/DetailsPage";

export const App = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/details" element={<DetailsPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

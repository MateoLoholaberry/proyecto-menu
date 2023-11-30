import React from "react";
import { Navbar } from "./components/navBar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Category } from "./components/categoryList/Category";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from "./components/detailsPage/DetailsPage";
import { CatBasedPost } from "./components/categoryList/catBasedPost";
import { RecipeList } from "./components/recipeList/recipeList";

export const App = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/details/:slug" element={<DetailsPage />} />
                    <Route path="/category/:id" element={<CatBasedPost />} />
                    <Route path="/recipeList/" element={<RecipeList />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
};

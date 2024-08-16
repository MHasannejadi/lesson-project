import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import LinkSection from "./LinkSection";
import repairsData from "./data/repairsData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import ProductDetail from "./productDetail";
function Main() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="flex flex-col md:flex-row w-10/12 md:w-11/12 mx-auto gap-4">
          <div className="md:w-8/12 mx-auto py-5 my-10 shadow-lg rounded-md border border-[#efefef]">
            <Routes>
              <Route exact path="/" Component={Category} />
              <Route
                path="/product-detail/:id"
                Component={ProductDetail}
              />
            </Routes>
          </div>
          <div className="flex flex-col my-10 space-y-10 md:w-4/12" dir="rtl">
            <LinkSection data={repairsData.bestLink} title="نوشته های تازه" />
            <LinkSection data={repairsData.categoryLink} title="دسته ها" />
            <LinkSection data={repairsData.useFullLink} title="لینک های مفید" />
          </div>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default Main;

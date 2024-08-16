import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import LinkSection from "./LinkSection";
import repairsData from "./data/repairsData";
import Footer from "./Footer";
function Main() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row w-10/12 md:w-11/12 mx-auto gap-4">
        <div className="md:w-8/12 mx-auto py-5 my-10 shadow-lg rounded-md border border-[#efefef]">
          <Category />
        </div>
        <div className="flex flex-col my-10 space-y-10 md:w-4/12"
        dir="rtl">
          <LinkSection data={repairsData.bestLink} title="نوشته های تازه" />
          <LinkSection data={repairsData.categoryLink} title="دسته ها" />
          <LinkSection data={repairsData.useFullLink} title="لینک های مفید" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;

import React from "react";
import repairsData from "./data/repairsData";
function Category() {
  return (
    <div className="w-11/12 mx-auto flex flex-col space-y-7">
      <h1 className="font-bold text-xl">دسته: تعمیرات</h1>
      {
        repairsData.category.map((data) => (
          <div key={data.id} className="flex flex-col space-y-3">
            <h3 className="font-bold text-xl text-[#0274be]">{data.title}</h3>
            <div className="grid grid-cols-2 border bg-[#F5F5F5] text-[12px] p-2 rounded-md">
              <span>نویسنده: {data.head.writer} </span>
              <span>تاریخ: {data.head.date} </span>
              <span>تعمیرات:{data.head.repair} </span>
              <span>دیدگاه:{data.head.opinion} </span>
            </div>
            <p className="line-clamp-5"> {data.desc}</p>
            <button className="flex justify-start text-[#0274be]">
              [ادامه مطلب]
            </button>
            <figure>
              <img src={data.image} alt="" />
            </figure>
          </div>
        ))
      }
    </div>
  );
}

export default Category;

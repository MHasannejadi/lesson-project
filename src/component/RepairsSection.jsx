import React from "react";

function RepairsSection({ data }) {
  console.log("dataaaa:", data);

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-bold text-xl text-[#0274be]">{data.title}</h3>
      <div className="grid grid-cols-2 border bg-[#F5F5F5] text-[12px] p-2 rounded-md">
        <span>نویسنده: {data.head.writer} </span>
        <span>تاریخ: {data.head.date} </span>
        <span>تعمیرات:{data.head.repair} </span>
        <span>دیدگاه:{data.head.opinion} </span>
      </div>
      <p className="line-clamp-5 overflow-hidden"> {data.desc}</p>
      <button className="flex justify-start text-[#0274be]">[ادامه مطلب]</button>
      <figure>
        <img src={data.image} alt="" />
      </figure>
    </div>
  );
}

export default RepairsSection;

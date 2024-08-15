import React from "react";
import { IoIosSquare } from "react-icons/io";
function LinkSection({ data, title }) {
  return (
    <div className="flex flex-col space-y-7 shadow-lg rounded-md border border-[#efefef] p-4"
   >
      <h3 className="font-bold text-xl text-[#0274be]">{title}</h3>
      <div className="p-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3 hover:text-[#0274be] hover:mr-2 transform duration-300 cursor-pointer">
            <IoIosSquare />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkSection;

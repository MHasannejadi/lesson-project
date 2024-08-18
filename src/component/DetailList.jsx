import React, { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

function DetailList({ list }) {
    const [menu, setMenu] = useState(false)
    const dropdownRef = useRef(null)
    useEffect(() => {
        const handleOutside = (event)=>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setMenu(false)
            }
        }
        document.addEventListener('mousedown' , handleOutside)
        return () => {
            document.removeEventListener("mousedown", handleOutside);
          };
    }, [])
    const handleClick = ()=>{
        setMenu(!menu)
    }
  return (
    <div ref={dropdownRef} className="my-5 border border-[#efefef]  rounded-md relative">
      <div className=" w-full " dir="rtl">
        <div onClick={handleClick} className="cursor-pointer p-2 list-none flex justify-between items-center">
          <span>فهرست</span>
          {menu ? <IoChevronUp /> : <IoChevronDownOutline /> }
        </div>
        {menu &&
        <ul  style={{ display: menu ? "block" : "none" }} className="menu absolute left-0 right-0 top-11 z-10 bg-base-100 h-fit rounded-md w-full shadow text-black">
          {list.map((item) => (
            <li onClick={handleClick} key={item.id} className="border-b-2">
              <a href={`#section-${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        }
      </div>
    </div>
  );
}

export default DetailList;

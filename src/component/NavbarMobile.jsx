import { FaBars } from "react-icons/fa";

function NavbarMobile() {
  return (
    <div className="bg-[#F5F5F5] w-full relative">
      <div className="w-10/12 mx-auto flex justify-between items-center py-1">
        <span>منو</span>
        <details className="dropdown ">
          <summary className="cursor-pointer list-none">
            <FaBars />
          </summary>
          <ul className="menu dropdown-content left-0 top-7 bg-base-100 rounded-md z-[1] w-52 p-2 shadow text-black">
            <li className="border-b-2">
              <a>تعمیرات</a>
            </li>
            <li className="border-b-2">
              <a>فروشگاه</a>
            </li>
            <li className="border-b-2">
              <a>قطعات کولر گازی</a>
            </li>
            <li>
              <a>نمایندگی جنرال</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}

export default NavbarMobile;

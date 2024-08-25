import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <div className="border-t-2 border-[#ff9900] bg-[#000]" dir="rtl">
      <div className="w-11/12 mx-auto flex justify-between items-center  text-white">
        <Link to="/" className="py-5 text-xl font-bold">
          کولر ماهان
        </Link>
        <div className="hidden md:flex">
          <ul className="flex gap-3 xl:gap-10">
            <li className="hoverNavbar">
              <a>تعمیرات</a>
            </li>
            <li className="hoverNavbar">
              <a>فروشگاه</a>
            </li>
            <li className="hoverNavbar">
              <a>قطعات کولر گازی</a>
            </li>
            <li className="hoverNavbar">
              <a>نمایندگی جنرال</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-white md:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
}

export default Navbar;

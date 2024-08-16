import React from "react";

function Footer() {
  return (
    <footer className="footer bg-[#353535] p-10 text-white" dir="rtl">
      <aside className="w-full ">
        <div>
          <h4>تماس با ما</h4>
          <br />
          <p>
            تهران تهران بخش مرکزی ، شهر تهران، محله دروازه شمیران ، خیابان
            بهارستان ، خیابان شهید برادران قائدی ، پلاک 35 ، طبقه همکف
          </p>
          <p>
          ۰۲۱۷۷۶۱۱۲۰۳ <br/> info[at]gascooler.ir۹ <br/> الی ۱۷ : ساعات پاسخگویی
          </p>
        </div>
      </aside>
      <div className="w-full gird gid-col-1 gap-10 md:grid-cols-4 ">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">شرکت</h6>
          <a className="link link-hover">درباره ما</a>
          <a className="link link-hover">تماس با ما</a>
          <a className="link link-hover">موقعیت های شغلی</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">شرکت</h6>
          <a className="link link-hover">درباره ما</a>
          <a className="link link-hover">تماس با ما</a>
          <a className="link link-hover">موقعیت های شغلی</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">شرکت</h6>
          <a className="link link-hover">درباره ما</a>
          <a className="link link-hover">تماس با ما</a>
          <a className="link link-hover">موقعیت های شغلی</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

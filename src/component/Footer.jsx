function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row gap-8 items-end bg-[#353535] p-10 text-white"
      dir="rtl"
    >
      <aside className="w-full">
        <div>
          <h4>تماس با ما</h4>
          <br />
          <p>
            تهران تهران بخش مرکزی ، شهر تهران، محله دروازه شمیران ، خیابان
            بهارستان ، خیابان شهید برادران قائدی ، پلاک 35 ، طبقه همکف
          </p>
          <p>
            ۰۲۱۷۷۶۱۱۲۰۳ <br /> info[at]gascooler.ir۹ <br /> الی ۱۷ : ساعات
            پاسخگویی
          </p>
        </div>
      </aside>
      <div className="w-full flex flex-col gap-10 h-full justify-between">
        <h4>لینک‌ها</h4>
        <nav className="flex flex-col gap-2">
          <a className="cursor-pointer">درباره ما</a>
          <a className="cursor-pointer">تماس با ما</a>
          <a className="cursor-pointer">موقعیت های شغلی</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

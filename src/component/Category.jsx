import repairsData from "./data/repairsData";
import { Link } from "react-router-dom";
function Category() {
  return (
    <div className="w-11/12 mx-auto flex flex-col space-y-7">
      {repairsData.category.map((data) => (
        <div key={data.id} className="flex flex-col space-y-3">
          <h3 className="font-bold text-2xl text-[#0274be]">
            <Link to={`/product-detail/${data.id}`}>{data.title}</Link>
          </h3>
          <div className="grid grid-cols-2 border bg-[#F5F5F5] text-[#888] text-[14px] p-2 rounded-md">
            <span>نویسنده: {data.head.writer} </span>
            <span>تاریخ: {data.head.date} </span>
            <span>تعمیرات:{data.head.repair} </span>
            <span>دیدگاه:{data.head.opinion} </span>
          </div>
          <p className="line-clamp-5"> {data.desc}</p>
          <Link
            to={`/product-detail/${data.id}`}
            className="flex justify-start text-[#0274be]"
          >
            ادامه مطلب
          </Link>
          <figure className="flex justify-center !mb-10">
            <img className="w-full" src={data.image} alt="" />
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Category;

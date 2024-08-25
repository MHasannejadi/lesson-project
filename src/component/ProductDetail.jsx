import { useParams } from "react-router";
import repairsData from "./data/repairsData";
import DetailList from "./DetailList";
function ProductDetail() {
  const { id } = useParams();
  const product = repairsData.category.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>product not found</div>;
  }
  return (
    <div className="w-11/12 mx-auto flex flex-col space-y-7">
      <h1 className="font-bold text-2xl">{product.title}</h1>
      <div className="grid grid-cols-2 border bg-[#F5F5F5] text-[12px] p-2 rounded-md">
        <span>نویسنده: {product.head.writer} </span>
        <span>تاریخ: {product.head.date} </span>
        <span>تعمیرات:{product.head.repair} </span>
        <span>دیدگاه:{product.head.opinion} </span>
      </div>
      <p className="mt-4">{product.desc}</p>
      <figure className="mt-4">
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="">
        <DetailList list={product?.details} />
      </div>
      <div className="space-y-10">
        {product?.details.map((detail) => (
          <div
            className="flex flex-col"
            key={detail.id}
            id={`section-${detail.id}`}
          >
            <h1 className="font-bold text-2xl">{detail.title}</h1>
            <p className="mt-4">{detail.desc1}</p>
            <figure className="mt-4">
              <img src={detail.image} alt="" />
            </figure>
            <p className="mt-4">{detail.desc2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;

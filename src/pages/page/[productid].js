import Header from "@/components/Header";
import Star from "@/components/Star";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Product = () => {
  const router = useRouter();
  const productID = router.query.productid;

  const url = `https://fakestoreapi.com/products/${productID}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return null;

  if (error) {
    return;
  }
  console.log(data);
  return (
    <>
      <Header />
      <div className="card card-side bg-base-100 shadow-xl container mx-auto my-10">
        <div className="w-[700px] py-10">
          <img
            src={data.image}
            width="300px"
            height="300px"
            className="mx-auto"
          />
        </div>
        <div className="card-body bg-gray-200 w-2/3">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="flex justify-between">
            <p>$ {data.price}</p>
            <p className="flex gap-2 justify-end">
              ratings: {data.rating.count} <Star star={data.rating.rate} />
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add Card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

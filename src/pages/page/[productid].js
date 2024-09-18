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
    <div className="card card-side bg-base-100 shadow-xl container mx-auto my-10">
      <figure>
        <img src={data.image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="flex justify-between">
          <p>$ {data.price}</p>
          <p>
            ratings: {data.rating.count}
            <Star star={data.rating.rate} />
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add Card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

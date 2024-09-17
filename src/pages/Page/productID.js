import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Product = () => {
  const router = useRouter();
  const productID = router.query.productID;

  const url = `https://fakestoreapi.com/products/${productID}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return null;

  if (error) {
    return;
  }
  return <div></div>;
};

export default Product;

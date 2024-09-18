import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useQueryState } from "next-usequerystate";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "./page/[productid]";

const storeHomePage = () => {
  const [storeData, setStoreData] = useState([]);
  const [categorys, setCategorys] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useQueryState("search", "");
  const [count, setCount] = useState(6);
  const [num, setNum] = useState(0);

  const url = `https://fakestoreapi.com/products/${category}/${categorys}`;
  console.log(url);
  useEffect(() => {
    const getStore = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setStoreData(data);
    };
    getStore();
  }, [categorys]);

  const filteredProducts = storeData.filter((data) => {
    if (!value) return true;
    return data.title.toLowerCase().includes(value.toLowerCase());
  });

  const jeweleryCategory = () => {
    return setCategory("category"), setCategorys("jewelery");
  };
  const electronicsCategory = () => {
    return setCategory("category"), setCategorys("electronics");
  };
  const mensCategory = () => {
    return setCategory("category"), setCategorys("men's clothing");
  };
  const womensCategory = () => {
    return setCategory("category"), setCategorys("women's clothing");
  };
  const allCategory = () => {
    return setCategory(""), setCategorys("");
  };
  const handleSearch = (value) => {
    return setValue(value);
  };

  const handleNextPage = () => {
    if (count > filteredProducts.length) {
      return;
    }
    return setCount(count + 6), setNum(num + 6);
  };
  const handlePrevPage = () => {
    if (count === 6) {
      return;
    }
    return setCount(count - 6), setNum(num - 6);
  };

  const slicedData = filteredProducts.slice(num, count);
  return (
    <div className="container mx-auto max-w-7xl">
      <Header
        home={allCategory}
        jewelery={jeweleryCategory}
        electronics={electronicsCategory}
        men={mensCategory}
        women={womensCategory}
        value={value}
        search={handleSearch}
      />
      <div className="grid grid-cols-3 gap-4 gap-y-6 mx-auto my-10">
        {slicedData.map((data, index) => {
          return (
            <Link href={`page/${data.id}`} key={index}>
              <Card data={data} />
            </Link>
          );
        })}
      </div>
      <div className="flex gap-6 mx-auto container justify-center">
        <button onClick={handlePrevPage} className="btn">
          Prev page
        </button>
        <button onClick={handleNextPage} className="btn">
          Next page
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default storeHomePage;

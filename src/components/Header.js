import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Search from "./icons/Search";
import { useState } from "react";
import { useQueryState } from "next-usequerystate";

const Header = (props) => {
  const { jewelery, electronics, men, women, home, search } = props;

  const [value] = useQueryState("search");

  return (
    <div className="flex justify-between items-center my-10">
      <div className=" flex gap-4 text-xl">
        <p className="font-bold cursor-pointer" onClick={home}>
          Store
        </p>
        <p onClick={electronics} className="cursor-pointer">
          Electronics
        </p>
        <p onClick={jewelery} className="cursor-pointer">
          Jewelery
        </p>
        <p onClick={men} className="cursor-pointer">
          Men's clothing
        </p>
        <p onClick={women} className="cursor-pointer">
          Women's clothing
        </p>
      </div>
      <div className="flex gap-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(event) => {
              search(event.target.value);
            }}
          />
          <Search />
        </label>
        <button className="btn">
          <MdOutlineLocalGroceryStore className="h-8 w-8" />
          <p className="badge badge-primary">1</p>
        </button>
      </div>
    </div>
  );
};
export default Header;

import React, { useState } from "react";
import Search from "../components/Search";

const Products = () => {
    const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
        <h1 className="text-[#000000] font-semibold text-lg mb-3">All Products</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
        <Search setPerPage={setPerPage}/>
      </div>
    </div>
  );
};

export default Products;

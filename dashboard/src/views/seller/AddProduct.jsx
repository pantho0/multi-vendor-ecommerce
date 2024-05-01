import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const categories = [
    {
      id: 1,
      name: "sports",
    },
    {
      id: 2,
      name: "t-shirt",
    },
    {
      id: 2,
      name: "mobile",
    },
    {
      id: 2,
      name: "computer",
    },
    {
      id: 2,
      name: "watch",
    },
    {
      id: 2,
      name: "Pant",
    },
  ];
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const [catShow, setCatShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState(categories);
  const [searchValue, setSearchValue] = useState("");

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srchValue = allCategory.filter(c=>c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      setAllCategory(srchValue)
    } else {
      setAllCategory(categories)
    }
  };

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#6A5FDF] rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Product</h1>
          <Link className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2">
            All Product
          </Link>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-[#020408]"
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-[#020408]"
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Brand Name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-[#020408]"
                  onChange={inputHandle}
                  value={state.stock}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Product Stock"
                />
              </div>
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Product Category</label>
                <input
                  readOnly
                  onClick={() => setCatShow(!catShow)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-slate-700 rounded-md text-[#020408]"
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  id="category"
                  placeholder="Category"
                />
                <div
                  className={`absolute top-[101%] bg-[#435469] w-full transition-all ${
                    catShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                    value={searchValue}
                      onChange={categorySearch}
                      className="px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-800 rounded-md text-[#d0d2d6] overflow-hidden w-full"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                    {allCategory.map((c, i) => (
                      <span
                        className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`}
                        onClick={() => {
                          setCatShow(false);
                          setCategory(c.name);
                          setSearchValue("");
                          setAllCategory(categories);
                        }}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

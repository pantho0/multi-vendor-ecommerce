import React from "react";
import img1 from "../../assets/images/category/1.jpg";
const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#425467] border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="pending">Pending</option>
            <option value="processing">processing</option>
            <option value="warehouse">warehouse</option>
            <option value="placed">placed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
        <div className="p-4 ">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>#34335</h2>
            <span>3rd Jan, 2024</span>
          </div>

          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-[#d0d2d6] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">
                    Deliver To : Pantho Mashreky
                  </h2>
                  <p>
                    <span className="text-sm">
                      Cecilia Chapman Nulla St.Mankato Mississippi
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status:</h2>
                  <span className="text-base">Paid</span>
                </div>
                <span>Price : $2345</span>

                <div className="mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-md">
                      <img className="w-[50px] h-[50px]" src={img1} alt="" />
                      <div>
                        <h2>Product Name</h2>
                        <p>
                          <span>Brand:</span>
                          <span> Easy</span>
                          <span className="text-lg"> Quatity:3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-md">
                      <img className="w-[50px] h-[50px]" src={img1} alt="" />
                      <div>
                        <h2>Product Name</h2>
                        <p>
                          <span>Brand:</span>
                          <span> Easy</span>
                          <span className="text-lg"> Quatity:3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-md">
                      <img className="w-[50px] h-[50px]" src={img1} alt="" />
                      <div>
                        <h2>Product Name</h2>
                        <p>
                          <span>Brand:</span>
                          <span> Easy</span>
                          <span className="text-lg"> Quatity:3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="pl-3">
                <div className="mt-4 flex flex-col bg-[#7F8CF0] rounded-md p-4">
                  <div className="text-[#d0d2d6] mt-2">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order</h2>
                      <span>Pending</span>
                    </div>
                    <div>
                      <div className="flex gap-3 text-md mt-2">
                        <img className="w-[50px] h-[50px]" src={img1} alt="" />
                        <div>
                          <h2>Product Name</h2>
                          <p>
                            <span>Brand:</span>
                            <span> Easy</span>
                            <span className="text-lg"> Quatity:3</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#d0d2d6]">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order</h2>
                      <span>Pending</span>
                    </div>
                    <div>
                      <div className="flex gap-3 text-md mt-2">
                        <img className="w-[50px] h-[50px]" src={img1} alt="" />
                        <div>
                          <h2>Product Name</h2>
                          <p>
                            <span>Brand:</span>
                            <span> Easy</span>
                            <span className="text-lg"> Quatity:3</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#d0d2d6]">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order</h2>
                      <span>Pending</span>
                    </div>
                    <div>
                      <div className="flex gap-3 text-md mt-2">
                        <img className="w-[50px] h-[50px]" src={img1} alt="" />
                        <div>
                          <h2>Product Name</h2>
                          <p>
                            <span>Brand:</span>
                            <span> Easy</span>
                            <span className="text-lg"> Quatity:3</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

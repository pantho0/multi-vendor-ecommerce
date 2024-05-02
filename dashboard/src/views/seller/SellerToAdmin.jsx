import React, { useState } from "react";

import img1 from "../../assets/images/admin.jpg";
import img2 from "../../assets/images/demo.jpg";

const SellerToAdmin = () => {
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#6A5FDF] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[45px] h-[45px] rounded-full border-green-500 border-2 max-w-[45px] p-[2px]"
                    src={img2}
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <h2 className="text-[#d0d2d6] text-base font-semibold">
                  Support
                </h2>
              </div>
            </div>
            <div className="py-4 ">
              <div className="bg-[#435469] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center ">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center ">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-red-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How are you?</span>
                    </div>
                    <div>
                      <img
                        className="w-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                        src={img1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3 ">
              <input
                className="w-full flex justify-between px-2 border-slate-700 items-center py-[5px] focus:border-red-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
                type="text"
                placeholder="input your message"
              />
              <button className="shadow-lg bg-[#06b6d4] hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToAdmin;

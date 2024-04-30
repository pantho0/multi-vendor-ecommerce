import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import img1 from "../../assets/images/admin.jpg";
const ChatSeller = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#6A5FDF] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : ""
            } md:left-0 md:relative transition-all`}
          >
            <div className="w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto">
              <div className="flex tex-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  onClick={() => setShow(true)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoIosCloseCircle />
                </span>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] rounded-full border-white border-2 max-w-[38px] p-[2px]"
                    src={img1}
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Pantho Mashreky</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] rounded-full border-white border-2 max-w-[38px] p-[2px]"
                    src={img1}
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Pantho Mashreky</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] rounded-full border-white border-2 max-w-[38px] p-[2px]"
                    src={img1}
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Pantho Mashreky</h2>
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

export default ChatSeller;

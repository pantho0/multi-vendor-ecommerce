import { FaImage } from "react-icons/fa6";
import { FadeLoader } from "react-spinners";
import { FaRegEdit } from "react-icons/fa";
import img from "../../assets/images/demo.jpg";
const Profile = () => {
  const image = true;
  const loader = true;
  const status = "active";
  const userInfo = false;
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full flex gap-3">
        <div className="w-full md:w-6/12">
          <div className="w-full p-4 bg-[#6A5FDF] rounded-md text-[#d0d2d6]">
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  htmlFor="img"
                  className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
                >
                  <img src={img} alt="" />
                  {!loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed hover:border-red-500 boder-[#d0d2d6] relative"
                  htmlFor="image"
                >
                  <span>
                    <FaImage />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>

            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                  {" "}
                  <FaRegEdit />{" "}
                </span>
                <div className="flex gap-2">
                  <span>Name :</span>
                  <span>Pantho Mashreky</span>
                </div>
                <div className="flex gap-2">
                  <span>Email :</span>
                  <span>pantho@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span>Role :</span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2">
                  <span>Status :</span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account :</span>
                  <p>
                    {status === "active" ? (
                      <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        Pending
                      </span>
                    ) : (
                      <span className="bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        Click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-0 md:pl-5 py-2">
              {!userInfo ? (
                <form>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="shop">Shop Name</label>
                    <input
                      className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                      type="text"
                      name="shop"
                      id="shop"
                      placeholder="Shop Name"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="division">Division Name</label>
                    <input
                      className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                      type="text"
                      name="division"
                      id="division"
                      placeholder="Division Name"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="district">District Name</label>
                    <input
                      className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                      type="text"
                      name="district"
                      id="district"
                      placeholder="District Name"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="sub">Sub District Name</label>
                    <input
                      className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                      type="text"
                      name="sub"
                      id="sub"
                      placeholder="Sub District Name"
                    />
                  </div>
                  <button className="bg-red-500 hover:shadow-red-500/50 hover:shadow-md text-white rouded-md px-7 py-2 my-2">
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                  <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                    {" "}
                    <FaRegEdit />{" "}
                  </span>
                  <div className="flex gap-2">
                    <span>Shop Name :</span>
                    <span>Easy Shop</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division :</span>
                    <span>Dhaka</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District :</span>
                    <span>Dhaka</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub Dist :</span>
                    <span>Dhaka</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0 bg-[#6A5FDF] rounded-md text-[#d0d2d6] ">
            <div className="bg-[#6A5FDF] rounded-md text-[#d0d2d6] p-4">
              <h1 className="text-[#d0d2d6] text-lg mb-3 font-semibold">Change Password</h1>
              <form>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="email">EMail</label>
                  <input
                    className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="old">Old Password</label>
                  <input
                    className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                    type="password"
                    name="old"
                    id="old"
                    placeholder="Old Password"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="new">New Password</label>
                  <input
                    className="px-4 py-2 border focus:border-indigo-500 outline-none bg-white  border-slate-700 rounded-md text-[#020408]"
                    type="password"
                    name="new"
                    id="new"
                    placeholder="Old Password"
                  />
                </div>
                
                <button className="bg-red-500 hover:shadow-red-500/50 hover:shadow-md text-white rouded-md px-7 py-2 my-2">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "../store/Reducers/authReducer";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const dispatch = useDispatch()
    const {token} = useSelector(state=>state.auth)
    console.log(token);

    useEffect(()=>{
      if(token){
          dispatch(get_user_info())
      }
  },[token, dispatch])

  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

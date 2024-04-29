import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/images/logo.png'
import { useEffect, useState } from "react";
import { getNav } from "../navigation/index";


const Sidebar = () => {
    const {pathname} = useLocation()
    const [allNav, setAllNav] = useState([])
    useEffect(()=>{
        const navs = getNav('admin')
        setAllNav(navs)
    },[])

    return (
        <div>
            <div></div>
            <div className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/5%)] transition-all`}>

                <div className="h-[70px] flex justify-center items-center">
                    <Link to={'/'} className="w-[180px] h-[50px]">
                        <img className="w-full h-full" src={Logo} alt="" />
                    </Link>
                </div>

                <div className="px-[16px]">
                    <ul>
                        {
                            allNav.map((n, i)=> <li key={i}>
                                <Link to={n.path} className={`${pathname === n.path ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500':'text-[#030811] font-bold duration-200'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}>
                                <span>{n.icon}</span>    
                                <span>{n.title}</span> 
                                </Link>
                                   
                            </li>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
import React, { useEffect, useState } from "react";
import Logo from '../../assets/images/logo.png'
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { useDispatch, useSelector } from 'react-redux';
import {PropagateLoader} from 'react-spinners'
import toast from 'react-hot-toast'




const AdminLogin = () => {
  const dispatch = useDispatch()
  const {loader, errorMessage} = useSelector(state=>state.auth)
  console.log(errorMessage);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
    // console.log(state);
  };

  const overrideStyle = {
      display : 'flex',
      margin : '0 auto',
      height : '20px',
      justifyContent : 'center',
      alignItem : 'center'
  }

  useEffect(()=>{
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
  },[errorMessage, dispatch])

  return (
    <div className="min-w-full min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
                <img className="w-full" src={Logo} alt='Ecommerce Logo' />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <button disabled={loader ? true : false} className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              {
                loader ? <PropagateLoader color="white" cssOverride={overrideStyle} />
                :
                'Log In'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

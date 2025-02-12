import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "./AuthProvider/AuthProvider";
import { FaHelicopter } from "react-icons/fa";


const NavBar = () => {
     const { theme, setTheme } = useState('light')
     const { logout, user } = useContext(AuthContex)

     useEffect(() => {

          localStorage.setItem('theme', theme)
          const localTheme = localStorage.getItem('theme')
          document.querySelector('html').setAttribute('data-theme', localTheme)
     }, [theme])
     const handleToggle = e => {
          if (e.target.checked) {
               setTheme('synthwave')
          } else {
               setTheme('light')
          }
     }

     const Navlinks = <>

          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'allspot'}>All Tourists Spot</NavLink></li>
          <li><NavLink to={'addSpot'}>Add Tourists Spot</NavLink></li>
          <li><NavLink to={'mylist'}>My List</NavLink></li>
          {/* <li><NavLink to={'register'}>Register</NavLink></li> */}


     </>
     return (
          <div>
               <div className="navbar mt-2 bg-[#D2B48C] bg-opacity-15 rounded-md">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                                   {Navlinks}
                              </ul>
                         </div>
                         <Link to={'/'} className="inline-flex items-center justify-center px-6 py-3 text-xl bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
                              <span className="text-blue-300 font-semibold mr-1">Discover</span> <FaHelicopter className="text-blue-200 text-2xl mx-1" /> <span className="text-blue-300 font-semibold ml-1">Dynamo</span>
                         </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {Navlinks}
                         </ul>
                    </div>
                    <div className="navbar-end space-x-3">
                         {user ? (
                              <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                                   <label tabIndex={0} className="btn btn-circle   avatar hover:ring-2 hover:ring-red-500">
                                        <div className="w-10 h-10 mt-1  mb-2 rounded-3xl ">
                                             <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} title={(user?.displayName || user.email)} alt="User avater" />
                                        </div>
                                        {/* <p className="text-black z-20 -mt-4">{user?.email || user.email || ""}</p> */}
                                   </label>
                                   <button onClick={logout} className="btn btn-ghost hover  text-black text-md md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] ">Logout</button>
                              </div>
                         )
                              : (
                                   <div className="flex space-x-5">
                                        <Link to='/register'>
                                             <button className="btn btn-ghost text-black text-lg md:text-xl  hover md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] bg-opacity-10">Register</button>
                                        </Link>
                                        <Link to='/login'>
                                             <button className="btn btn-ghost text-black text-lg md:text-xl  hover md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] bg-opacity-10">Login</button>
                                        </Link>

                                   </div>
                              )}

                         <label className="swap swap-rotate">
                              {/* this hidden checkbox controls the state */}
                              <input
                                   onChange={handleToggle}
                                   type="checkbox" className="theme-controller"  value="synthwave"  />

                              {/* sun icon */}
                              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                              {/* moon icon */}
                              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                         </label>
                    </div>
               </div>
          </div>
     );
};

export default NavBar;
// type="checkbox"
// value="synthwave" 
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Pages/firebase/firebase.init';
import ProfileModal from './ProfileModal';

const Navbar = ({ children }) => {
    const [user, loading, error] = useAuthState(auth,);
    const [profileOpen, setProfileOpen] = useState(null)
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar ">
                    <div className="flex-1 px-2 mx-2 font-semibold text-4xl">Tool<span className='font-semibold text-4xl text-blue-200'>Kit</span></div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal ">
                            {/* <!-- Navbar menu content here --> */}
                            <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/'>Home</NavLink> </li>
                            <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/about'>About</NavLink></li>
                            <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/blog'>Blog</NavLink></li>
                            <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/services'>Services</NavLink></li>
                            <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/contact'>Contact</NavLink></li>
                            {user ? <li onClick={logout} className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/login'>Logout</NavLink></li> : <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/login'>Login</NavLink></li>}

                            <li className=''><NavLink className='rounded-lg font-semibold uppercase font-mono ' to='/signup'>Signup</NavLink></li>

                            {/* <li>
                                <button className='rounded-lg font-semibold uppercase font-mono'  data-act-classname="ACTIVECLASS">Theme</button>
                            </li> */}
                            <li className="dropdown dropdown-hover">

                                <NavLink to='' tabIndex="0" className=" rounded-lg font-semibold uppercase font-mono">Book Now</NavLink>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100  w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>

                            </li>

                            <li>
                                <label class="swap swap-rotate">


                                    <input type="checkbox" data-toggle-theme="dark,light" />


                                    <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                                    <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </li>
                            {user && <li className=''>
                                <div class="avatar online rounded-lg">
                                    <div class="w-10 rounded-full">

                                        <label onClick={() => setProfileOpen()} for="profile-modal" class=""><img src={user.photoURL} alt='' /></label>
                                        <ProfileModal></ProfileModal>
                                    </div>

                                </div>
                                {/* <div className='rounded-lg'>
                                    <p className='text-green-600 rounded-lg font-semibold uppercase font-mono'>{user.displayName}</p>
                                </div> */}


                            </li>

                            }


                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink className='rounded-lg font-semibold' to='home'>Home</NavLink> </li>
                    <li><NavLink className='rounded-lg font-semibold' to='/about'>About</NavLink></li>
                    <li><NavLink className='rounded-lg font-semibold' to='/blog'>Blog</NavLink></li>
                    <li><NavLink className='rounded-lg font-semibold' to='/services'>Services</NavLink></li>
                    <li><NavLink className='rounded-lg font-semibold' to='/contact'>Contact</NavLink></li>
                    <li><NavLink className='rounded-lg font-semibold' to='/login'>Login</NavLink></li>
                    {/* <li className="dropdown dropdown-hover">

                        <label tabIndex="0" className="btn rounded-lg m-1">Hover</label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>

                    </li> */}


                </ul>

            </div>
        </div>
    );
};

export default Navbar;
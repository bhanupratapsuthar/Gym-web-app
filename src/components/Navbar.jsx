import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        // set width of navBar
        <div className="w-screen">
            <nav className="flex justify-between h-[87px] sticky items-center
            bg-black mr-4">
                <NavLink to='/'>
                    <div>
                        <img src="../logo.jpeg" alt="" />
                    </div>
                </NavLink>

                <div className="flex justify-evenly gap-x-8 items-center mr-4">
                    <NavLink to='/'
                        className='text-xl font-semibold text-white 
                        hover:border-b-2 hover:scale-110 transition duration-200 ease-in'>
                        <h2>Home</h2>

                    </NavLink>

                    <NavLink to='/membership+plan'
                        className='text-xl hover:scale-110 font-semibold text-white 
                        hover:border-b-2 transition duration-200 ease-in'>
                        <h2>MemberShip</h2>
                    </NavLink>

                    <NavLink to='/blogs'
                        className='text-xl font-semibold text-white 
                        hover:border-b-2 hover:scale-110 transition duration-200 ease-in'>
                        <h2>Blogs</h2>
                    </NavLink>
                    <NavLink to='/store'
                        className='text-xl hover:scale-110 font-semibold text-white 
                        hover:border-b-2 transition duration-200 ease-in'>
                        <h2>Store</h2>
                    </NavLink>


                    <NavLink to='/login'
                        className='text-xl font-semibold text-white 
                        hover:border-b-2 hover:scale-110 transition duration-200 ease-in'>
                        <h2>Login</h2>
                    </NavLink>


                </div>



            </nav>

        </div>
    )
}

export default Navbar;

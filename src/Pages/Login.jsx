import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Picture1 from '../pictures/pexels-cesar-galeao-1673528-3253501.jpg'


const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "", password: ""
    });

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();

        const accountData = {
            ...formData
        };

        console.log("Printing Login account data: ");
        console.log(accountData);

        navigate('/dashboard')
    }

    function createAccountHandler() {
        navigate('/signup');
    }

    return (
        <div className="h-full pl-[50px] pb-48 loginPage">
            <div className="w-[500px] ">
                <form onSubmit={submitHandler}>
                    <h1 className="pt-20  text-white text-4xl font-semibold">Login Account</h1>
                    <div className="w-full flex flex-col justify-center text-white px-14 py-8">
                        <label htmlFor="username">
                            <p className="font-semibold text-lg text-white">Email/Phone</p>
                            <input
                                required
                                type="text"
                                onChange={changeHandler}
                                name="username"
                                placeholder="Email/Phone"
                                className="bg-transparent border-2 border-slate-600 rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-black font-medium"
                                value={formData.username} />
                        </label>

                        <label htmlFor="password" className="relative">
                            <p className="font-semibold text-lg text-white">Password</p>
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                onChange={changeHandler}
                                value={formData.password}
                                className="bg-transparent border-2 border-slate-600 rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-black font-medium"
                            />

                            <span
                                className="absolute bottom-4 right-2"
                                onClick={() => setShowPassword((prev) => !prev)}>
                                {
                                    showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                }
                            </span>
                        </label>

                        <Link to='#'>
                            <p className="text-end text-xs hover:underline">
                                Forgot Password
                            </p>
                        </Link>

                        <button
                            className=" bg-yellow-500 text-lg font-semibold tracking-wide rounded-md h-10 mt-4 w-full">
                            Sign In
                        </button>

                    </div>
                </form>

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-slate-500"></div>
                    <p className="text-slate-600 font-medium leading-[1.125rem]">
                        OR
                    </p>
                    <div className="h-[1px] w-full bg-slate-500"></div>
                </div>


                <button
                    className="border rounded-md h-10 border-black text-lg font-semibold text-white w-full"
                    onClick={createAccountHandler}>
                    Create New Account
                </button>

            </div>

            {/* <div>
                <img src={Picture1}
                    alt="faltu"
                    width="500px"
                    height='600px'
                    className="mt-20 " />
            </div> */}
        </div>
    )
}

export default Login;

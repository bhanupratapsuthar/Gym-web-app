import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const SignUpForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords are not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData
        }

        console.log("Printing final account data: ")
        console.log(finalData);
        navigate('/');
    }

    return (
        <div className="bg-slate-950 h-[1000px] w-full signUpForm py-[100px] pl-[100px]">

            <h1 className="text-5xl font-semibold text-white p-8 pl-[85px]">Create An Account</h1>
            <form
                className="flex flex-col items-center w-[600px] nothing gap-y-8 "
                onSubmit={submitHandler}>
                <div className="flex flex-col gap-y-[2rem] pt-[1rem]">

                    <div className="flex gap-x-4 justify-between">
                        <label>
                            <p className="font-semibold text-lg text-white">First Name</p>
                            <input
                                required
                                type="text"
                                placeholder="Enter First Name"
                                value={formData.firstName}
                                name="firstName"
                                className="bg-transparent border-2 text-white border-slate-600 rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                                onChange={changeHandler}
                            />
                        </label>

                        <label>
                            <p className="font-semibold text-lg text-white">Last Name</p>
                            <input
                                required
                                type="text"
                                placeholder="Enter Last Name"
                                value={formData.lastName}
                                name="lastName"
                                className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                                onChange={changeHandler}
                            />
                        </label>
                    </div>

                    <label>
                        <p className="font-semibold text-lg text-white">Email</p>
                        <input
                            required
                            type="Email"
                            placeholder="Enter Email Address"
                            value={formData.email}
                            name="email"
                            className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                            onChange={changeHandler}
                        />
                    </label>

                    <label>
                        <p className="font-semibold text-lg text-white">Mobile Number</p>
                        <input
                            required
                            type="text"
                            placeholder="Enter Mobile Number"
                            value={formData.mobile}
                            name="mobile"
                            className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                            onChange={changeHandler}
                        />
                    </label>

                    <div className="flex justify-between">
                        <label className="relative">
                            <p className="font-semibold text-lg text-white">Password</p>
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={formData.password}
                                name="password"
                                className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                                onChange={changeHandler}
                            />
                            <span
                                className="absolute bottom-4 right-2"
                                onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (<AiOutlineEye fontSize={20} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />)}
                            </span>
                        </label>

                        <label className="relative">
                            <p className="font-semibold text-lg text-white">Confirm Password</p>
                            <input
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                name="confirmPassword"
                                className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                                onChange={changeHandler}
                            />
                            <span
                                className="absolute bottom-4 right-2"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                {showConfirmPassword ? (<AiOutlineEye fontSize={20} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />)}
                            </span>
                        </label>
                    </div>
                </div>



                <button className="w-[73%] h-10 text-2xl mb-8 font-semibold border rounded-md 
                 border-white text-white hover:text-blue-600 hover:bg-white transition duration-500 ease-in-out">
                    Create Account
                </button>


            </form>

            <div className="flex w-[600px] items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-slate-500"></div>
                <p className="text-slate-600 font-medium leading-[1.125rem]">
                    OR
                </p>
                <div className="h-[1px] w-full bg-slate-500"></div>
            </div>

            <button
                className="border rounded-md h-10 border-black text-lg font-semibold text-white w-[560px] 
                hover:bg-amber-400 transition duration-700 ease-linear ml-6">
                Login Account
            </button>

        </div>


    )
}

export default SignUpForm;
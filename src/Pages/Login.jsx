import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    
    // Access loading state from Redux store
    const isLoading = useSelector(state => state.auth.loading);

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;

            // Dispatch the login action
            await dispatch(login({ email, password })).unwrap();

            // Navigate to dashboard after successful login
            navigate('/dashboard');
            
        } catch (error) {
            console.error('Error during login:', error);
            toast.error("Login failed! Please try again.");
        }
    };

    return (
        <div className="h-[100vh] flex items-center loginPage">
            <div className="w-11/12 flex items-center mx-auto">
                <div className="w-[500px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="pt-20 text-white text-4xl font-semibold">Login Account</h1>
                        <div className="w-full flex flex-col justify-center text-white px-14 py-8">

                            <label htmlFor="email">
                                <p className="font-semibold text-lg text-white">Email</p>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-transparent border-2 border-slate-600 rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-black font-medium"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <p className="text-red-500">Email is required</p>}
                            </label>

                            <label htmlFor="password" className="relative">
                                <p className="font-semibold text-lg text-white">Password</p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="bg-transparent border-2 border-slate-600 rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-black font-medium"
                                    {...register('password', { required: true })}
                                />
                                <span
                                    className="absolute bottom-4 right-2"
                                    onClick={() => setShowPassword((prev) => !prev)}>
                                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                                {errors.password && <p className="text-red-500">Password is required</p>}
                            </label>

                            <Link to='#'>
                                <p className="text-end text-xs hover:underline">
                                    Forgot Password
                                </p>
                            </Link>

                            <button
                                className={`bg-yellow-500 text-lg font-semibold tracking-wide rounded-md h-10 mt-4 w-full ${isLoading ? 'cursor-wait opacity-50' : ''}`}
                                disabled={isLoading} // Disable the button when loading
                            >
                                {isLoading ? "Loading..." : "Sign In"}
                            </button>
                        </div>
                    </form>

                    <div className="flex w-full items-center my-4 gap-x-2">
                        <div className="h-[1px] w-full bg-slate-500"></div>
                        <p className="text-slate-600 font-medium leading-[1.125rem]">OR</p>
                        <div className="h-[1px] w-full bg-slate-500"></div>
                    </div>

                    <button
                        className="border rounded-md h-10 border-black text-lg font-semibold text-white w-full"
                        onClick={() => navigate('/signup')}
                    >
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

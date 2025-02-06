import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loading, setLoading } from "../redux/slices/authSlice";
import { httpClient } from "../services/apiInstance";

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const password = watch("password");
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);



    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));

        try {
            const response = await httpClient.post("auth/signup", data);
            
            toast.success(response?.data?.message);
            navigate("/otp", { state: { email: data.email } });
        } catch (error) {
            console.error("API error:", error);
            toast.error("Error occurred while creating account");
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId)
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen flex items-center justify-center p-4">
            <div className="nothing bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-lg">
                <h1 className="text-center text-3xl font-extrabold text-white mb-8">
                    Create An Account
                </h1>
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-200 mb-1">
                                First Name
                            </label>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                type="text"
                                placeholder="Enter First Name"
                                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                            {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>}
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-200 mb-1">
                                Last Name
                            </label>
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                type="text"
                                placeholder="Enter Last Name"
                                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                            {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Email Address
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            placeholder="Enter Email Address"
                            className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <label className="block text-sm font-medium text-gray-200 mb-1">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    {...register("password", { required: "Password is required" })}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 text-gray-400 hover:text-gray-300 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>}
                        </div>

                        <div className="relative flex-1">
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Confirm Password
                        </label>
                        <div className="relative flex items-center">
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: (value) => value === password || "Passwords do not match",
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                className="absolute right-3 text-gray-400 hover:text-gray-300 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>}
                    </div>

                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

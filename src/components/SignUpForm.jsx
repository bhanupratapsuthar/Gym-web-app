import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const password = watch("password");

    // const onSubmit = async (data) => {
    //     if (data.password !== data.confirmPassword) {
    //         toast.error("Passwords do not match");
    //         return;
    //     }

    //     toast.success("Account Created");
    //     const accountData = { ...data };

    //     try {
    //         const response = await axios.post("http://localhost:8000/auth/signup", accountData);
    //         console.log(response);
    //     } catch (error) {
    //         console.error("API error:", error);
    //         toast.error("Error occurred while creating account");
    //     }
    // };

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:8000/auth/signup", data);
            toast.success("Account Created");
            navigate("/otp", { state: { email: data.email } });
        } catch (error) {
            console.error("API error:", error);
            toast.error("Error occurred while creating account");
        }
    };
    

    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                    Create An Account
                </h1>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <label className="flex-1">
                            <p className="font-semibold text-sm text-gray-300 mb-1">First Name</p>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                type="text"
                                placeholder="Enter First Name"
                                className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                            />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </label>

                        <label className="flex-1">
                            <p className="font-semibold text-sm text-gray-300 mb-1">Last Name</p>
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                type="text"
                                placeholder="Enter Last Name"
                                className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                            />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </label>
                    </div>

                    <label>
                        <p className="font-semibold text-sm text-gray-300 mb-1">Email</p>
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
                            className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </label>

                    <label>
                        <p className="font-semibold text-sm text-gray-300 mb-1">Mobile Number</p>
                        <input
                            {...register("mobile", { required: "Mobile Number is required" })}
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                        />
                        {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile.message}</span>}
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <label className="relative flex-1">
                            <p className="font-semibold text-sm text-gray-300 mb-1">Password</p>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                            />
                            <span
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <AiOutlineEye fontSize={20} /> : <AiOutlineEyeInvisible fontSize={20} />}
                            </span>
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </label>

                        <label className="relative flex-1">
                            <p className="font-semibold text-sm text-gray-300 mb-1">Confirm Password</p>
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value => value === password || "Passwords do not match",
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                            />
                            <span
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                            >
                                {showConfirmPassword ? <AiOutlineEye fontSize={20} /> : <AiOutlineEyeInvisible fontSize={20} />}
                            </span>
                            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

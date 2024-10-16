import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    // React Hook Form setup
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const password = watch("password");  // To validate confirm password

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        toast.success("Account Created");

        // API call to send form data
        const accountData = { ...data };
        console.log("Sending data to API:", accountData);

        // Send data to API (replace with your API endpoint)
        try {
            const response = await axios.post("http://localhost:8000/auth/signup",accountData)

            console.log(response)
        } catch (error) {
            console.error("API error:", error);
            toast.error("Error occurred while creating account");
        }
    };

    return (
        <div className="bg-slate-950 h-[1000px] w-full signUpForm py-[100px] pl-[100px]">
            <h1 className="text-5xl font-semibold text-white p-8 pl-[85px]">Create An Account</h1>
            <form
                className="flex flex-col items-center w-[600px] gap-y-8 nothing p-8"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-y-[2rem] pt-[1rem]">

                    <div className="flex gap-x-4 justify-between">
                        <label>
                            <p className="font-semibold text-lg text-white">First Name</p>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                type="text"
                                placeholder="Enter First Name"
                                className="bg-transparent border-2 text-white border-slate-600 rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                            />
                            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                        </label>

                        <label>
                            <p className="font-semibold text-lg text-white">Last Name</p>
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                type="text"
                                placeholder="Enter Last Name"
                                className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                            />
                            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                        </label>
                    </div>

                    <label>
                        <p className="font-semibold text-lg text-white">Email</p>
                        <input
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                            type="email"
                            placeholder="Enter Email Address"
                            className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </label>

                    <label>
                        <p className="font-semibold text-lg text-white">Mobile Number</p>
                        <input
                            {...register("mobile", { required: "Mobile Number is required" })}
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                        />
                        {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
                    </label>

                    <div className="flex justify-between">
                        <label className="relative">
                            <p className="font-semibold text-lg text-white">Password</p>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                            />
                            <span
                                className="absolute bottom-4 right-2"
                                onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (<AiOutlineEye fontSize={20} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />)}
                            </span>
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </label>

                        <label className="relative">
                            <p className="font-semibold text-lg text-white">Confirm Password</p>
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value => value === password || "Passwords do not match"
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="bg-transparent border-2 border-slate-600 text-white rounded-md my-2 h-8 w-full placeholder:pl-3 placeholder:text-white font-medium"
                            />
                            <span
                                className="absolute bottom-4 right-2"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                {showConfirmPassword ? (<AiOutlineEye fontSize={20} fill="#AFB2BF" />) : (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />)}
                            </span>
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                        </label>
                    </div>
                </div>

                <button className="w-[73%] h-10 text-2xl mb-8 font-semibold border rounded-md 
                 border-white text-white hover:text-blue-600 hover:bg-white transition duration-500 ease-in-out">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;

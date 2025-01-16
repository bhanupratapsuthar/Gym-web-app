import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MembershipPlans } from "./membership/MembershipPlans";

const MemberShipPlansInquery = () => {
    const [showModal, setShowModal] = useState(false);
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset 
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            zipcode: ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        setShowModal(true);
        reset();
    };

    return (
        <>
            <div className="flex-col items-center w-full min-h-screen bg-slate-900 text-white flex justify-center">
                <MembershipPlans />

                <div className="w-11/12 max-w-[680px] mt-[5rem] mb-20">
                    <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Membership Inquiry
                    </h1>
                    <div>
                        <p className="mt-10 mb-6 text-sm font-semibold text-gray-300">*Required fields</p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col justify-center gap-y-6"
                        >
                            <div className="relative">
                                <label className="block">
                                    <p className="font-medium text-base md:text-lg mb-1">First Name*</p>
                                    <input
                                        {...register("firstName", { 
                                            required: "First name is required",
                                            minLength: {
                                                value: 2,
                                                message: "First name must be at least 2 characters"
                                            }
                                        })}
                                        className={`bg-transparent w-full h-12 border-b-2 focus:outline-none focus:border-blue-400 transition-colors px-2 ${
                                            errors.firstName ? 'border-red-500' : 'border-white'
                                        }`}
                                    />
                                </label>
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label className="block">
                                    <p className="font-medium text-base md:text-lg mb-1">Last Name*</p>
                                    <input
                                        {...register("lastName", { 
                                            required: "Last name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Last name must be at least 2 characters"
                                            }
                                        })}
                                        className={`bg-transparent w-full h-12 border-b-2 focus:outline-none focus:border-blue-400 transition-colors px-2 ${
                                            errors.lastName ? 'border-red-500' : 'border-white'
                                        }`}
                                    />
                                </label>
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label className="block">
                                    <p className="font-medium text-base md:text-lg mb-1">Email*</p>
                                    <input
                                        {...register("email", { 
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        type="email"
                                        className={`bg-transparent w-full h-12 border-b-2 focus:outline-none focus:border-blue-400 transition-colors px-2 ${
                                            errors.email ? 'border-red-500' : 'border-white'
                                        }`}
                                    />
                                </label>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label className="block">
                                    <p className="font-medium text-base md:text-lg mb-1">Phone*</p>
                                    <input
                                        {...register("phone", { 
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Please enter a valid 10-digit phone number"
                                            }
                                        })}
                                        type="tel"
                                        className={`bg-transparent w-full h-12 border-b-2 focus:outline-none focus:border-blue-400 transition-colors px-2 ${
                                            errors.phone ? 'border-red-500' : 'border-white'
                                        }`}
                                    />
                                </label>
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label className="block">
                                    <p className="font-medium text-base md:text-lg mb-1">Zip Code*</p>
                                    <input
                                        {...register("zipcode", { 
                                            required: "Zip code is required",
                                        })}
                                        className={`bg-transparent w-full h-12 border-b-2 focus:outline-none focus:border-blue-400 transition-colors px-2 ${
                                            errors.zipcode ? 'border-red-500' : 'border-white'
                                        }`}
                                    />
                                </label>
                                {errors.zipcode && (
                                    <p className="text-red-500 text-sm mt-1">{errors.zipcode.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full my-8 py-3 px-8 text-lg md:text-xl font-bold w-full md:w-[200px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                <span className="relative z-10">Submit</span>
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8 w-full max-w-md transform transition-all shadow-2xl">
                        <div className="flex flex-col items-center justify-center text-center">
                            {/* Success Icon */}
                            <div className="rounded-full bg-green-500/20 p-4 mb-6 animate-bounce">
                                <svg 
                                    className="w-10 h-10 text-green-500" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Thank You!
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                Our team will contact you shortly to brief you about our Royal Gym membership options.
                            </p>
                            <button 
                                onClick={() => setShowModal(false)}
                                className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MemberShipPlansInquery;
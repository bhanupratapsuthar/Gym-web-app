import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OtpPage = ({ email }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // Simulate OTP verification request
            setTimeout(() => {
                toast.success("OTP Verified Successfully");
                setIsSubmitting(false);
            }, 2000);
        } catch (error) {
            toast.error("Invalid OTP");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Verify Your Account</h1>
                <p className="text-gray-400 text-center mb-8">
                    We've sent a 6-digit OTP to your email:{" "}
                    <span className="text-blue-500 font-semibold">{email}</span>
                </p>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <label className="block">
                        <p className="font-semibold text-sm text-gray-300 mb-1">Enter OTP</p>
                        <input
                            {...register("otp", {
                                required: "OTP is required",
                                minLength: { value: 6, message: "OTP must be 6 digits" },
                                maxLength: { value: 6, message: "OTP must be 6 digits" },
                            })}
                            type="text"
                            placeholder="Enter OTP"
                            className="w-full bg-gray-800 text-white rounded-lg border border-gray-700 p-3 focus:outline-none focus:border-blue-500"
                        />
                        {errors.otp && (
                            <span className="text-red-500 text-xs">{errors.otp.message}</span>
                        )}
                    </label>
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg font-semibold text-lg ${
                            isSubmitting
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
                <p className="text-gray-400 text-center mt-4">
                    Didn't receive the OTP?{" "}
                    <button
                        className="text-blue-500 font-semibold hover:underline focus:outline-none"
                        onClick={() => toast.info("Resending OTP...")}
                    >
                        Resend
                    </button>
                </p>
            </div>
        </div>
    );
};

export default OtpPage;

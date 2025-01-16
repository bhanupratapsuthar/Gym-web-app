import React, { useState } from "react";
import { useForm } from "react-hook-form";
import picturecontact from "../pictures/stronger-young-muscular-caucasian-athlete-practicing-lunges-gym-with.jpg"

const ContactUs = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Open modal after form submission
        setModalOpen(true);
    };

    return (
        <div className="bg-slate-900 text-white min-h-screen">
            {/* Header Section with Gym Image */}
            <div className="relative h-[50vh]">
                <img
                    src={picturecontact} 
                    alt="Gym"
                    className="w-full h-full object-cover  opacity-80"
                />
                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <h1 className="text-5xl font-bold italic text-white drop-shadow-lg">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-6 md:px-12 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col gap-6">
                        {/* Location & Contact Information */}
                        <div className="text-white">
                            <h2 className="font-semibold text-3xl md:text-4xl tracking-wide">Location:</h2>
                            <p className="text-xl tracking-wider ml-4">
                                C-23, Sardarpura B-Road, Jodhpur, Rajasthan
                                <br />Pincode-342003
                            </p>
                            <h2 className="font-semibold text-3xl md:text-4xl tracking-wide mt-6">Contact:</h2>
                            <p className="text-xl tracking-wider ml-4">
                                Email: &nbsp;
                                <a href="mailto: royalgym321@gmail.com" className="hover:underline text-blue-300 font-normal text-xl">royalgym321@gmail.com</a>
                                <br />
                                Mobile: &nbsp;
                                <a href="tel: +91 9876543210" className="hover:underline text-blue-300 font-normal text-xl"> +91-9876543210</a>
                            </p>
                        </div>

                        {/* Feedback Form */}
                        <div className="mt-10">
                            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">Feedback Form:</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <textarea
                                    {...register('feedback', { required: "Feedback is required" })}
                                    rows="5"
                                    className="w-full bg-transparent border border-slate-500 rounded-md p-3"
                                    placeholder="Your feedback here"
                                />
                                {errors.feedback && <p className="text-red-500">{errors.feedback.message}</p>}

                                <input
                                    {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })}
                                    type="email"
                                    className="w-full bg-transparent border border-slate-500 rounded-md p-3"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3"
                                >
                                    Submit Feedback
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white text-black p-8 rounded-md w-11/12 sm:w-96">
                        <h2 className="text-2xl font-semibold">Thank you for your feedback!</h2>
                        <p className="mt-4">We appreciate your time and will get back to you soon.</p>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;

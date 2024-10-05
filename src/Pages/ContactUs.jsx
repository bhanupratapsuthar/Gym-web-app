import React from "react";

const ContactUs = () => {
    return (
        <div className="pb-8 contactUs pt-[200px] pl-[120px]">
            <div >
                <div className="flex flex-col text-white gap-y-6 ml-[125px] pt-8">
                    <h2 className="text-white font-semibold text-5xl tracking-wide ">Location:</h2>
                    <p
                        className="text-white ml-4 text-2xl tracking-wider">
                        C-23, Sardarpura B-Road, Jodhpur, Rajasthan
                        <br />Pincode-342003
                    </p>
                    <h2 className="text-white font-semibold text-5xl tracking-wide">Contact:</h2>
                    <p
                        className="text-white ml-4 text-2xl tracking-wider">
                        Email: &nbsp;
                        <a href="mailto: royalgym321@gmail.com" className="hover:underline text-blue-300 font-normal text-2xl">royalgym321@gmail.com</a>
                        <br />
                        Mobile: &nbsp;
                        <a href="tel: +91 9876543210" className="hover:underline text-blue-300 font-normal text-2xl"> +91-9876543210</a>
                    </p>

                    <h1 className="text-white text-5xl font-semibold tracking-wide">Feedback Form:</h1>
                    <div className="flex flex-col gap-4">
                        <textarea
                            name="feedback"
                            id="feedback"
                            rows={5}
                            cols={50}
                            className="bg-transparent w-[500px] border border-slate-500 ml-4 rounded-md"
                        >Feedback here</textarea>
                        <input
                            className="w-[500px] bg-transparent border border-slate-500 ml-4 rounded-md"
                            type='email'
                            placeholder="Email" />
                        <button
                            className="bg-transparent border border-slate-500 ml-4 rounded-md w-[200px]">Submit Feedback</button>
                    </div>

                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default ContactUs;

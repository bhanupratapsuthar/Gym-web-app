import { queryByRole } from "@testing-library/react";
import React, { useState } from "react";
import { FcUnlock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { MembershipPlans } from "./membership/MembershipPlans";


const MemberShipPlansInquery = () => {

    const navigate = useNavigate();

    const [queryData, setQueryData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipcode: ""
    })

    function changeHandler(event) {
        setQueryData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))


    }


    function submitHandler(event) {
        event.preventDefault();
        const queryFormData = {
            ...queryData
        }

        navigate("/query+submit");
    }

    return (
        <div className="flex-col items-center w-full h-full bg-slate-900 text-white flex justify-center">

                 <MembershipPlans/>

                 
            <div className="w-11/12 max-w-[680px] mt-[5rem] ">
                <h1 className="font-bold text-5xl">Membership Inquiry</h1>
                <div className="">
                    <p className="mt-10 mb-6 text-sm font-semibold">*Required</p>
                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col justify-center gap-y-6">
                        <label className="border-b-2 border-white">
                            <p className="font-medium text-lg">First Name*</p>
                            <input
                                type="text"
                                required
                                name="firstName"
                                onChange={changeHandler}
                                className="bg-transparent w-full h-[2.75rem]"
                                value={queryData.firstName}

                            />
                        </label>

                        <label className="border-b-2 border-white">
                            <p className="font-medium text-lg">Last Name*</p>
                            <input
                                type="text"
                                required
                                name="lastName"
                                onChange={changeHandler}
                                className="bg-transparent w-full h-[2.75rem] border-white"
                                value={queryData.lastName}
                            />
                        </label>

                        <label className="border-b-2 border-white">
                            <p className="font-medium text-lg">Email*</p>
                            <input
                                type="text"
                                required
                                name="email"
                                onChange={changeHandler}
                                className="bg-transparent w-full h-[2.75rem] border-white"
                                value={queryData.email}
                            />
                        </label>

                        <label className="border-b-2 border-white">
                            <p className="font-medium text-lg">Phone*</p>
                            <input
                                type="text"
                                required
                                name="phone"
                                onChange={changeHandler}
                                className="bg-transparent w-full h-[2.75rem] border-white"
                                value={queryData.phone}
                            />
                        </label>

                        <label className="border-b-2 border-white">
                            <p className="font-medium text-lg">Zip Code*</p>
                            <input
                                type="text"
                                required
                                onChange={changeHandler}
                                name="zipcode"
                                className="bg-transparent w-full h-[2.75rem] border-white"
                                value={queryData.zipcode}
                            />
                        </label>

                        <button
                            className="border-2 border-white rounded-full my-8 p-2 text-xl font-bold w-[100px]">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MemberShipPlansInquery;
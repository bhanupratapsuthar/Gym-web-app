import React, { useState } from "react";
import MemberShips from "./MemberShips";
import Gym from "./Gym";

const FaQs = () => {
    const [type, setType] = useState("MemberShips")

    return (
        <div className="m-10">
            <div className="flex gap-4 ">
                <button
                    className="bg-green-500 py-2 px-4 rounded-md text-xl font-semibold"
                    onClick={() => setType("MemberShips")}>
                    Memberships
                </button>
                <button
                    className="bg-red-500 py-2 px-4 rounded-md text-xl font-semibold "
                    onClick={() => setType("Gym")}>
                    Gym
                </button>
            </div>
            <div className="mt-2">
                {
                    type == "MemberShips" ?
                        (<MemberShips />) :
                        (<Gym />)

                }
            </div>
        </div>
    )
}

export default FaQs;
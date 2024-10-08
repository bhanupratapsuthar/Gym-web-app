import React, { useState } from "react";
import Main1 from "../components/Main1";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const Home = (props) => {
    let datas = props.datas;
    const [index, setIndex] = useState(0);

    function backwordHandler() {
        if (index - 1 < 0) {
            setIndex(datas.length - 1);
        }
        else {
            setIndex(index - 1);
        }

    }

    function forwardHandler() {
        if (index + 1 >= datas.length) {
            setIndex(0)
        }
        else {
            setIndex(index + 1);
        }

    }
    return (
        <div className="relative">
            <div>
                <Main1 data={datas[index]}></Main1>
            </div>
            <div className=" mx-8 absolute top-[280px] items-baseline space-x-[1150px]">
                <button
                    className="w-[40px] h-[40px]"
                    onClick={backwordHandler}>
                    <FaChevronLeft size={40} color="white" />
                </button>
                <button
                    className="w-[40px] absolute left-1 -top-4 h-[40px]"
                    onClick={forwardHandler}>
                    <FaChevronRight size={40} color="white" />
                </button>
            </div>

        </div>
    )
}

export default Home;

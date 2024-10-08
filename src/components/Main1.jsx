import React from "react";

const Main1 = (props) => {
    let data = props.data;

    return (
        <div>
            <div
                className="w-screen h-screen">
                <img src={data.image} alt="first image"
                    className="w-[100%] h-[100%]" />
            </div>
        </div>
    )
}

export default Main1;
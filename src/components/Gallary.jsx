import React from "react";

const Gallary = ({ pictures }) => {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 min-h-[80vh] p-10 bg-neutral-800 bg-opacity-90">
            {
                pictures.map((picture, i) => {
                    return (
                        <div key={i} className="flex justify-center items-center">
                            <img src={picture.image} className="w-full h-[250px] object-cover" alt="" loading="lazy" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gallary;
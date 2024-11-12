import React from "react";

const Gallary = ({ pictures }) => {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1   
               space-y-10 space-x-10 min-h-[80vh] items-end p-10 bg-neutral-800 bg-opacity-90">
            {
                pictures.map((picture, i) => {
                    return (
                        <div className="justify-center">
                            <img src={picture.image} className="h-[200px] hover:scale-125 transition duration-300 ease-linear" alt="" loading="lazy" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gallary;
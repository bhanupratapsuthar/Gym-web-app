import React from "react";
import Picture1 from '../pictures/pexels-leonardho-2468339.jpg'

const AboutUs = () => {
    return (
        <div className="">
            <div className="h-screen w-screen aboutPage">
                <h1 className="text-8xl text-black pl-[150px] pt-[200px] italic font-extrabold 
                transition duration-300 ease-linear hover:scale-110">About Us</h1>
            </div>

            <div className="flex justify-between m-20 items-start">
                <div className="w-[750px] flex flex-col gap-6">
                    <h2 className="font-bold text-xl">About Us-Royal Gym</h2>
                    <p className="font-medium ">
                        Celebrating two decades of exceptional fitness, Waves Gym stands proudly at the
                        forefront of wellness in the vibrant core of Jodhpur's Sadarpura area. Spanning an
                        impressive 10,000 sq.ft., our facility marks a significant milestone in the landscape
                        of standalone boutique gyms.
                    </p>
                    <p className="font-medium">
                        <span className="font-bold text-xl">ROYAL GYM: A 2-YEAR FITNESS LEGACY – </span>
                        this isn’t just our tagline; it’s a testament to our commitment to your health and
                        fitness journey. With state-of-the-art equipment, a spacious workout arena, and a
                        dedicated CrossFit Studio, we’ve created an environment where champions are made.
                    </p>
                    <p className="font-medium">
                        Our internationally certified personal trainers don’t just guide you; they tailor a
                        workout and diet regimen that’s as unique as you are. We believe in a personalized
                        touch, from our welcoming reception team to our expert floor trainers, at Waves,
                        you’re not just a member; you’re family.
                    </p>
                    <p className="font-medium">
                        We elevate your fitness experience with complimentary valet parking, daily-use lockers,
                        and shoe storage. Dive into our range of popular group classes, including Zumba,
                        Power Yoga, Indoor Cycling, and CrossFit, all bookable with a simple click on
                        our user-friendly app.
                    </p>
                    <div className="">
                        <p className="font-semibold text-lg">Operating Hours:</p>
                        <ul>
                            <li className="font-medium pl-8">Monday to Saturday: 6:00 am to 12:00 am</li>
                            <li className="font-medium pl-8">Sunday: 6:00 am to 10:00 pm</li>
                        </ul>
                    </div>
                    <p className="font-medium">
                        Join us at Royal Gym, where strength is not just built, it’s celebrated.
                    </p>
                </div>
                <div>
                    <img
                        src={Picture1}
                        alt="willpower"
                        width={350}
                        height={500}
                        className="rounded-md opacity-80 hover:opacity-100 transition duration-700 ease-linear 
                        hover:scale-110" />
                </div>
            </div>
        </div>

    )
}

export default AboutUs;
import React from "react";
import Picture1 from '../pictures/pexels-leonardho-2468339.jpg';
import Picture2 from '../pictures/young-fitness-man-studio_7502-5008.avif';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Header Section */}
            <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
                 style={{ backgroundImage: `url(${Picture2})` }}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white italic font-extrabold text-center shadow-lg backdrop-blur-md px-4 py-2 bg-black/30 rounded">
                    About Us
                </h1>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                            About Us - Royal Gym
                        </h2>
                        <p className="text-white leading-relaxed">
                            Celebrating two decades of exceptional fitness, Waves Gym stands proudly at the
                            forefront of wellness in the vibrant core of Jodhpur's Sadarpura area. Spanning an
                            impressive 10,000 sq.ft., our facility marks a significant milestone in the landscape
                            of standalone boutique gyms.
                        </p>
                        <p className="text-white leading-relaxed">
                            <span className="font-bold text-xl">ROYAL GYM: A 2-YEAR FITNESS LEGACY –</span> this isn’t just our tagline; it’s a testament to
                            our commitment to your health and fitness journey. With state-of-the-art equipment, a
                            spacious workout arena, and a dedicated CrossFit Studio, we’ve created an environment
                            where champions are made.
                        </p>
                        <p className="text-white leading-relaxed">
                            Our internationally certified personal trainers tailor workouts and diet regimens to 
                            your unique needs. From our welcoming reception team to expert trainers, you’re family.
                        </p>
                        <p className="text-white leading-relaxed">
                            Elevate your fitness experience with valet parking, lockers, and group classes like Zumba,
                            Power Yoga, Indoor Cycling, and CrossFit, bookable via our app.
                        </p>
                        <div>
                            <p className="font-semibold text-lg">Operating Hours:</p>
                            <ul className="list-disc pl-6">
                                <li className="text-white">Monday to Saturday: 6:00 am to 12:00 am</li>
                                <li className="text-white">Sunday: 6:00 am to 10:00 pm</li>
                            </ul>
                        </div>
                        <p className="text-white leading-relaxed">
                            Join us at Royal Gym, where strength is not just built, it’s celebrated.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={Picture1}
                            alt="willpower"
                            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import heroImage from "../../assets/images/hero-team.jpg"
const HomeHero = () => {
    return (
        <div className="hero bg-base-200 py-15">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <motion.img
                animate={{
                    y:[0,50,0]
                }}
                transition={{
                    duration:5,
                    repeat:Infinity
                }}
                src={heroImage}
                className="md:max-w-sm rounded-lg shadow-2xl"
                />
                <div className="ps-4 pt-15">
                <h1
                className="text-3xl md:text-5xl font-bold">Find your <motion.span 
                animate={{
                    color:['#ff5733','#00fff0','#0061ff'],
                }}
                transition={{
                    duration:5,
                    repeat:Infinity
                }}
                >career</motion.span></h1>
                <p className="py-6 md:w-1/2">
                Finding your career starts with self-reflection and exploration. Identify your strengths, interests, and values to guide your path. Research industries, network with professionals, and gain experience through internships or volunteering. Stay adaptable and open-minded, as your career journey may evolve over time. Persistence and passion lead to success.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;

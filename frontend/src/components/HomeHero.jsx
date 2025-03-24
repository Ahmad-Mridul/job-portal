import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
const HomeHero = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
            <motion.h1 
            animate={{
                x:[0,200,0],
                transition:{
                    duration:15,
                    repeat:Infinity
                }
            }} 
            className="text-5xl font-bold">Box Office News!</motion.h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default HomeHero;

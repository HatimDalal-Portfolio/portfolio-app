import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Photo.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial
              className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl"
            >
              Hatim Dalal
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT}</p>
            <a
              href="/Hatim_Dalal_Resume.pdf" // Replace with the actual path to your resume
              download="Hatim_Dalal_Resume.pdf"
              className="mt-4 mb-4 inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:from-pink-500 hover:to-purple-500"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Hatim Dalal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

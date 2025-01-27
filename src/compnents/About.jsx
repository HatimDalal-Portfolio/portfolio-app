import aboutMe from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-6/12 lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutMe} alt="About Me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="flex flex-wrap gap-3 pb-4">
            <span className="px-3 py-1 text-sm font-medium bg-gray-800 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-transparent hover:bg-clip-text hover:shadow-lg">
              Tech Enthusiast 🚀
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-gray-800 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-transparent hover:bg-clip-text hover:shadow-lg">
              Research Paper Explorer 📚
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-gray-800 text-white rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-transparent hover:bg-clip-text hover:shadow-lg">
              Nature Lover 🌿
            </span>
          </div>

          <div>
            <p className="mt-4 text-sm text-neutral-500">
              Fun Fact: When I'm not coding, I enjoy exploring cutting-edge tech
              like GPUs and CPUs or building custom PCs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

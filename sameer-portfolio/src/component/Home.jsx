import React from "react";
import MyImage from "../assets/heroImage.png";
import MyImage2 from "../assets/Sameer.jpeg";
import MyImage3 from "../assets/Sameer2.png";
import MyImage4 from "../assets/Sameer3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 mt-8 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a React Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Over the past 6 months, I have undergone rigorous training at Masai
            School, specializing in JavaScript. My practical experience
            encompasses a range of projects where I have leveraged my skills in
            React, Tailwind CSS, HTML, CSS, and vanilla JavaScript.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Porfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            className="rounded-[50px] mx-auto w-2/3 md:w-2/3"
            src={MyImage3}
            alt="My Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

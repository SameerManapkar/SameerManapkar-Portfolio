import React from "react";
import project1 from "../assets/portfolio/project1.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/project3.png";
import project4 from "../assets/portfolio/project4.png";
import project5 from "../assets/portfolio/project5.png";
import project6 from "../assets/portfolio/project6.png";
import project7 from "../assets/portfolio/project7.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project4,
      code: "https://github.com/izhar100/rigid-yarn-4261/tree/Sameer_day_5",
      demo: "https://apnamarketcwproject.netlify.app/",
    },
    {
      id: 2,
      src: project2,
      code: "https://github.com/SameerManapkar/excellent-noise-5475",
      demo: "https://drive.google.com/file/d/1VgFVb6c6WDkly0gUjQ37C3zVkTUbNO7c/view?usp=sharing",
    },
    {
      id: 7,
      src: project7,
      code: "https://github.com/SameerManapkar/SameerManapkar-Portfolio",
      demo: "https://sameermanapkarportfolio.netlify.app/",
    },
    {
      id: 3,
      src: project3,
      code: "https://github.com/SameerManapkar/Amazone_clone_Sameer",
      demo: "https://amazonclone1919.netlify.app/",
    },
    {
      id: 4,
      src: project1,
      code: "https://github.com/SameerManapkar/even-expansion-2082/tree/day-5",
      demo: "https://lambent-kitten-acccf1.netlify.app/",
    },
    {
      id: 5,
      src: project5,
      code: "https://github.com/SameerManapkar/Learning-Webisite-with-tailwind-css",
      demo: "https://github.com/SameerManapkar/Learning-Webisite-with-tailwind-css",
    },
    {
      id: 6,
      src: project6,
      code: "https://github.com/SameerManapkar/ReactReduxMiniProject",
      demo: "https://github.com/SameerManapkar/ReactReduxMiniProject",
    },
  ];

  const redirectToDemo = (demoURL) => {
    window.open(demoURL, "_blank");
  };

  const redirectToCode = (codeURL) => {
    window.open(codeURL, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Checkout Some Of My Work Here...</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project_image"
                className="rounded:md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => redirectToDemo(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => redirectToCode(code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={project1}
              alt="project_image"
              className="rounded:md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;

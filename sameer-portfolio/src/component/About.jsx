import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a passionate front-end developer with extensive training in React
          and JavaScript from Masai School. I have successfully completed
          various projects, both individually and in groups, showcasing my
          skills in problem-solving and collaboration. With a solid foundation
          in data structures and algorithms, I have solved around 300 DSA
          questions. I am driven by a constant desire to learn and improve, and
          I am excited to contribute to innovative and impactful projects.
        </p>

        <br />

        <p className="text-xl">
          During my training at Masai School, I honed my front-end development
          skills, specializing in React and JavaScript. With a keen eye for
          detail and a passion for creating user-friendly interfaces, I have
          successfully delivered projects that combine aesthetic appeal with
          functionality. I thrive in collaborative environments and enjoy
          tackling complex challenges to deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;

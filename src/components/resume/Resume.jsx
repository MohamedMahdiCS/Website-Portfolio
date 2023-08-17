import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-row sm:gap-5 mx-auto">
        {/* Experience Section */}
        <div className="left flex-1 flex items-start justify-center pr-4">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer - Internship
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  IIUM
                </span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  August 2023 - December 2023
                </span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  During my internship at IIUM, I independently delved into web and mobile development, managing all aspects from design to deployment. Without a team's guidance, I navigated challenges, adopted best practices, and utilized tools like Git. This self-reliant journey emphasized adaptability and underscored my growth in full-stack development.
                </p>
              </div>
              {/* Additional Experience */}
              <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-5">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Front-End Developer
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Asia Pacific University
                </span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                February 2022 - January 2023
                </span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                During my tenure as a front-end developer, I've seamlessly combined the art of design with the science of programming to create visually appealing and user-friendly websites. Leveraging the flexibility of WordPress, I've successfully developed custom themes and plugins, enhancing website functionality and ensuring a unique online presence for clients. My proficiency with modern front-end frameworks and my in-depth knowledge of WordPress have enabled me to bridge the gap between graphical design and technical implementation, always prioritizing responsive design and optimal user experience.                </p>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Education Section */}
        <div className="right flex-1 flex items-start justify-center pl-4">
          <fieldset
            data-aos="zoom-in"
            className="w-[90%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bsc (Hons) In Computer Science (Cyber Security)
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Asia Pacific University of Technology & Innovation (APU)
                </span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021 - Year 2024
                </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  During my studies, I mastered cyber security and full-stack development, equipping me with the skills to build secure and user-friendly web applications. I emphasize data protection and integrate security throughout the development process, ensuring safe and functional platforms.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;

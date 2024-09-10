import React from 'react';
import MyPic from "../assets/Profile_pic.JPG";
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
  name="home"
  className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
>
  <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full items-center md:items-start text-center md:text-left">
      <h2 className="text-4xl sm:text-7xl font-bold text-white">
        I'm a Frontend Developer
      </h2>
      <p className="text-gray-500 py-4 max-w-md">
        With nearly 3 years of experience in building and designing software, 
        I am passionate about crafting robust and scalable web applications. 
        My expertise lies in leveraging modern technologies like React, TailwindCSS, 
        JavaScript, and Redux to deliver high-performance, visually appealing solutions. 
        I thrive on creating seamless, intuitive user experiences while maintaining clean 
        and efficient code that ensures reliability and scalability.
      </p>

      <div>
        <Link
          to="portfolio"
          smooth
          duration={800}
          className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          Portfolio
          <span className="group-hover:rotate-90 duration-300">
            <MdKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </div>

    <div className="mt-8 md:mt-0">
      <img
        src={MyPic}
        alt="my profile"
        className="rounded-2xl mx-auto w-2/3 md:w-full"
      />
    </div>
  </div>
</div>

  )
}

export default Home

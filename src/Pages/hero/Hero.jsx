/** @format */

import React from "react";
import bg from "../../images/gym_bg.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800/60 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-white text-3xl font-extrabold tracking-wider">GYM Rat</h1>
          <ul className="flex space-x-8 items-center">
            <li className="text-gray-300 cursor-pointer hover:text-white transition duration-300">
              Home
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-white transition duration-300">
              About
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-white transition duration-300">
              Services
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-white transition duration-300">
              Contact
            </li>

            <Link to={"/login"}>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                Sign In
              </button>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex-grow bg-cover bg-center text-white pt-[200px]"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
        <div className="relative container mx-auto flex flex-col items-center text-center z-10 space-y-6">
          <h2 className="text-6xl font-bold mb-4 animate-fade-in-down">Welcome to Gym Rat</h2>
          <p className="mb-6 text-xl max-w-3xl mx-auto animate-fade-in-up">
            Elevate your fitness journey with state-of-the-art equipment and expert coaching in a
            motivating environment.
          </p>
          <a
            href="#"
            className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-300 transition duration-300 mt-8 animate-bounce"
          >
            Join Us Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            &copy; 2024 GYM Application. All rights reserved.
          </p>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Hero;

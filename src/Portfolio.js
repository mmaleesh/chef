import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Portfolio.css';

// Import assets
import dosa from './Assets/dosa.jpg';
import ms1 from './Assets/ms1.jpg';
import video1 from './Assets/video1.mp4';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Chef Maleesh</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#dishes" className="hover:text-blue-400">Dishes</a>
            <a href="#videos" className="hover:text-blue-400">Videos</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          Namaste! I'm Maleesh, a passionate Indian cooking chef with a love for crafting traditional and 
          fusion recipes. My journey in the culinary world is filled with flavorful adventures and delightful 
          experiments in the kitchen.
        </p>
      </section>

      {/* Image Slider for Dishes */}
      <section id="dishes" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Signature Dishes</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src={dosa} alt="Dosa" />
            <p className="legend">Dosa</p>
          </div>
          <div>
            <img src={ms1} alt="Dish 2" />
            <p className="legend">Special Dish</p>
          </div>
        </Carousel>
      </section>

      {/* Video Player for Cooking Videos */}
      <section id="videos" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Cooking Videos</h2>
        <video width="100%" height="auto" controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-4">
            <li className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-blue-500 hover:scale-105 transition-all">
              Indian Cuisine
            </li>
            <li className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-blue-500 hover:scale-105 transition-all">
              Recipe Development
            </li>
            <li className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-blue-500 hover:scale-105 transition-all">
              Plating and Presentation
            </li>
            <li className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-blue-500 hover:scale-105 transition-all">
              Food Photography
            </li>
            <li className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-blue-500 hover:scale-105 transition-all">
              Menu Planning
            </li>
            <li className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-blue-500 hover:scale-105 transition-all">
              Baking
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: <a href="mailto:mmaleesh9@gmail.com" className="underline hover:text-blue-400">mmaleesh9@gmail.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="underline hover:text-blue-400">+91 98765 43210</a></p>
          <p>Instagram: <a href="https://www.instagram.com/rohansharma" className="underline hover:text-blue-400">Instagram Profile</a></p>
          <p>Youtube: <a href="https://www.youtube.com/rohansharma" className="underline hover:text-blue-400">Youtube Channel</a></p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

// HeroSection.js

import backgroundImage from "../image/hero-bg1.jpg";

const HeroSection = () => {
  const heroStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={heroStyles}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Explore the World with Us</h1>
        <p className="text-lg mb-8">
          Discover amazing destinations and create unforgettable memories.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

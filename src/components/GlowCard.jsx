import React, { useState } from "react";

const CardsGrid = () => {
  const cards = [
    {
      title: " Scroll ",
      description: " this is a responsive project using scroll animations , made by ( HTML , CSS , JS) ",
      image: "/images/scrollimage.png",
      path: "https://braa8.github.io/Animated-project/"
    },
    {
      title: " CRUD System ",
      description: " this system made by ( HTML , CSS , JAVA SCRIPT) ",
      image: "/images/crudimage.png",
      path: "https://braa8.github.io/CRUDS/"
    },
    {
      title: " CSS Project ",
      description: " a simple animation using HTML and CSS ",
      image: "/images/flowerimage.png",
      path: "https://braa8.github.io/CSS-Animation/"
    },
    {
      title: " Simple Portfolio ",
      description: " portfolio with simple designes , made by next.js ",
      image: "/images/React.png",
      path: "https://portfolio-seven-neon-80.vercel.app"
    },
  ];

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [lightStyle, setLightStyle] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (hoveredCardIndex !== index) setHoveredCardIndex(index);

    setLightStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 70%)`,
    });
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
    setLightStyle({});
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-gray-800 border border-gray-600 rounded-2xl overflow-hidden shadow-md text-white transition duration-300 hover:scale-105"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            style={hoveredCardIndex === index ? lightStyle : {}}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-300">{card.description}</p>
              <a target="_blank" href={card.path} className="mt-4 text-blue-700 hover:text-blue-500 hover:scale-100"> See The Website → </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;

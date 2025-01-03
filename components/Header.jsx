'use client';

import React, { useState, useRef } from "react";
import "boxicons/css/boxicons.min.css"; 


const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lightRef = useRef(null);

  const links = [
    { icon: "bx bx-home-alt-2", color: "text-cyan-400" },
    { icon: "bx bx-heart", color: "text-red-500" },
    { icon: "bx bx-plus-circle", color: "text-lime-400" },
    { icon: "bx bx-user", color: "text-purple-400" },
    { icon: "bx bx-bell", color: "text-yellow-400" },
  ];

  const handleClick = (index, event) => {
    setActiveIndex(index);
    const light = lightRef.current;
    const { offsetLeft, offsetWidth } = event.target.closest("li");
    if (light) {
      light.style.left = `${offsetLeft + offsetWidth / 2 - 32}px`;
    }

    // Trigger the shining effect
    setLightEffect(true);
    setTimeout(() => setLightEffect(false), 500); 
  };

  
  return (

    <nav className="relative flex items-center justify-center h-32">
      <ul className="relative flex items-center w-96 h-16 bg-gray-900 rounded-full shadow-lg px-8">
        {links.map((link, index) => (
          <li key={index} className="relative flex-1 flex justify-center">
            <a
              href="#"
              className={`text-4xl opacity-50 transition-all ${
                activeIndex === index ? `opacity-100 ${link.color}` : ""
              }`}
              onClick={(e) => handleClick(index, e)}
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
        <div
          ref={lightRef}
          className="absolute top-[80%] left-0 w-16 h-1 bg-white rounded transition-all duration-300"
        ></div>
      </ul>
    </nav>
  );
};

export default Header;

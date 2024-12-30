import React from "react";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[hsl(var(--hue),90%,10%)] text-[hsl(var(--hue),90%,90%)]">
      <svg
        className="pl"
        viewBox="0 0 64 64"
        width="64px"
        height="64px"
        role="img"
        aria-label="5-point star slowly rotating clockwise and formed by moving, expanding, and shrinking encircling lines, which are white, red, red-orange, light green, and green"
      >
        <g
          className="pl__star"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 190.88"
          strokeDashoffset="0"
        >
          <path
            className="pl__worm"
            stroke="hsl(0,10%,90%)"
            d="M 31.94 3.191 L 40.388 20.309 L 59.279 23.054 L 45.61 36.379 L 48.836 55.193 L 31.94 46.31 L 15.044 55.193 L 18.27 36.379 L 4.601 23.054 L 23.492 20.309 Z"
            transform="rotate(0,32,32)"
          />
          <path
            className="pl__worm"
            stroke="hsl(133,90%,40%)"
            d="M 31.94 3.191 L 40.388 20.309 L 59.279 23.054 L 45.61 36.379 L 48.836 55.193 L 31.94 46.31 L 15.044 55.193 L 18.27 36.379 L 4.601 23.054 L 23.492 20.309 Z"
            transform="rotate(72,32,32)"
          />
          <path
            className="pl__worm"
            stroke="hsl(133,90%,60%)"
            d="M 31.94 3.191 L 40.388 20.309 L 59.279 23.054 L 45.61 36.379 L 48.836 55.193 L 31.94 46.31 L 15.044 55.193 L 18.27 36.379 L 4.601 23.054 L 23.492 20.309 Z"
            transform="rotate(144,32,32)"
          />
          <path
            className="pl__worm"
            stroke="hsl(3,90%,60%)"
            d="M 31.94 3.191 L 40.388 20.309 L 59.279 23.054 L 45.61 36.379 L 48.836 55.193 L 31.94 46.31 L 15.044 55.193 L 18.27 36.379 L 4.601 23.054 L 23.492 20.309 Z"
            transform="rotate(216,32,32)"
          />
          <path
            className="pl__worm"
            stroke="hsl(3,90%,40%)"
            d="M 31.94 3.191 L 40.388 20.309 L 59.279 23.054 L 45.61 36.379 L 48.836 55.193 L 31.94 46.31 L 15.044 55.193 L 18.27 36.379 L 4.601 23.054 L 23.492 20.309 Z"
            transform="rotate(288,32,32)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Preloader;

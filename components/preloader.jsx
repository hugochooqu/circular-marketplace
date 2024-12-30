"use client"; 

// import React, { useEffect, useState } from "react";

const Preloader = () => {
  
  /* Calling a useEffect will cause a behavior we don't need, it's like setting the timer twice, it was best to set the timer in the layout so that it will call it before the whole pade loads */
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setTimeout(() => {
  //       setIsLoading(false); // Hide preloader after page load
  //     }, 1500); // Optional delay for smoother effect
  //   };

  //   if (document.readyState === "complete") {
  //     handleLoad();
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //   }

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  // if (!isLoading) return null; // Do not render the preloader when loading is complete

  return (
    <div className="flex items-center justify-center h-screen bg-[hsl(223,90%,10%)] text-[hsl(223,90%,90%)]">
      <style jsx global>{`
        :root {
          --hue: 223;
        }

        .pl {
          display: block;
          margin: auto;
          width: 8em;
          height: auto;
        }

        .pl__star {
          animation: spin 10s linear infinite;
          transform-origin: 32px 32px;
        }

        .pl__worm {
          animation: worm-length 10s linear infinite, worm-move 10s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(1turn);
          }
        }

        @keyframes worm-length {
          0%,
          50%,
          100% {
            stroke-dasharray: 0.1 190.88;
          }
          25%,
          75% {
            stroke-dasharray: 28.632 162.248;
          }
        }

        @keyframes worm-move {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -190.88;
          }
        }
      `}</style>
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

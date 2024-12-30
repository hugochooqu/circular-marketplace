'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from 'react';
import Preloader from "@/components/preloader";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLoading(false)
    // }, 6000);

    // return () => clearTimeout(timer);
    const handleLoad = () => {
      setIsLoading(false)
    };

    if (document.readyState === 'complete') {
      handleLoad()
    } else (
      window.addEventListener('load', handleLoad)
    );

    return () =>  window.removeEventListener('load', handleLoad)


  }, [])

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? <Preloader /> : children}
      </body>
      
    </html>
  );

}

const preloadImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
  });
};

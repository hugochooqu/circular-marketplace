/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'marketplace': "url('/pexels-baskincreativeco-1766838.webp')",
        'authBg': "url('/pexels-felixmittermeier-957024.webp')"
      }
    },
  },
  plugins: [],
};

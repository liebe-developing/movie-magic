/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSans"],
        vazir: ["Vazir"],
        mosalas: ["Mosalas"],
      },
      colors: {
        primary: "#131720",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/bg-hero.avif')",
        moviePageBg: "url('/src/assets/images/movie-page-bg.jpg')",
        signinBg: "url('/src/assets/images/signin-bg.jpg')",
        signinBg2: "url('/src/assets/images/signin-bg2.jpg')",
      },
      boxShadow: {
        iconShadow: "0 0 98px 6px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#220000',  // Definimos el color primary aquí.
      },
    },
  },
  plugins: [flowbite.plugin()],
};

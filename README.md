# React + Vite

run the below code in terminal from step 1 to step 4

Step 1 : npm create vite@latest ./ -- --template react

step 2 : npm install

step 3 : npm install -D tailwindcss postcss autoprefixer

step 4 : npx tailwindcss init -p

step 5 : paste below code in ( tailwind.config.js ) file

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

step 6 : paste below code in ( index.css ) file

@tailwind base;
@tailwind components;
@tailwind utilities;

step 7 : delete app.css file in src

step 8 : paste below code in ( App.js ) file

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

step 9 : run this in code in terminal ( npm run dev )

step 10 : run this in new terminal ( npm install react-icons --save )

for icons :- https://react-icons.github.io/react-icons/

you should change the content in index.js

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

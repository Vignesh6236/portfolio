import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className="bg-black text-white">
      <main className="max-w-7xl mx-auto ">
        <Navbar />
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;

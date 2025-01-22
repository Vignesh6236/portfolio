import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="bg-black text-white">
      <main className="max-w-7xl mx-auto ">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
};

export default App;

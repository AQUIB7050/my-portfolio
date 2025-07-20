import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Header />
      <main className="px-6 md:px-20">
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;

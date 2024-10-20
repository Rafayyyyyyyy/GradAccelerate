/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main
      className="overflow-x=hidden bg-white
    text-dark"
    >
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};
export default App;

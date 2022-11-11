import React from "react";
import useTitle from "../../../Hooks/UseTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CoreFeature from "../CoreFeatures/CoreFeature";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testomonial from "../Testomonial/Testomonial";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
      <CoreFeature></CoreFeature>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;

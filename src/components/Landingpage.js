import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import EduEvents from "./EduEvents";

function Landingpage() {
  return (
    <div>
      <Header />
      <Home />
      <EduEvents />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landingpage;

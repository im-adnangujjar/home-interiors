import React from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import LandInteroirs from "../../component/sections/LandInteroirs";
import Projects from "../../component/sections/Projects";
import SectionA from "../../component/sections/SectionA";

function LeandingPage() {
  return (
    <div>
      <Header />
      <SectionA />
      <LandInteroirs/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default LeandingPage;

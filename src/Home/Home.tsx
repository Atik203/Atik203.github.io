import React, { useEffect, useState } from "react";
import AnimatedCursor from "../components/AnimatedCursor";
import FloatingElements from "../components/FloatingElements";
import ParticleBackground from "../components/ParticleBackground";
import ScrollIndicator from "../components/ScrollIndicator";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";
import "./Loading/loading.css";
import Navbar from "./Navbar/Navbar";
import Project from "./Project/Project";
import Service from "./Service/Service";
import Skills from "./Skills/Skills";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="">
      <Loading />
    </div>
  );
};

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await new Promise<void>((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="relative">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Scroll Progress Indicator */}
          <ScrollIndicator />

          {/* Background Effects */}
          <ParticleBackground />
          <FloatingElements />
          <AnimatedCursor />

          {/* Main Content */}
          <div className="relative z-20">
            <Navbar />
            <div id="home" className="container mx-auto px-4">
              <Banner />
              <Skills />
              <Service />
              <Project />
              <About />
              <Contact />
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

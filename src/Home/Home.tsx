import React, { useEffect, useState } from "react";
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
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default Home;

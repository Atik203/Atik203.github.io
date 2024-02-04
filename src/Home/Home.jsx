import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Service from "./Service/Service";
import Banner from "./Banner/Banner";
import { useEffect } from "react";
import Lottie from "lottie-react";
import animationPath from "../../public/animation.json";
import { useState } from "react";
import "./Loading/loading.css";
import Loading from "./Loading/Loading";

const LoadingSpinner = () => {
  return (
    <div className="">
      <Loading />
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
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
          <div className="w-10/12 mx-auto">
            <Navbar />
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

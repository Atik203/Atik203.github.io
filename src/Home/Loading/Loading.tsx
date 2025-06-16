import Lottie from "lottie-react";
import React from "react";
import animation from "../../assets/animation.json";
import "./loading.css";

const Loading: React.FC = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-white">
      <div className="md:w-[600px]">
        <Lottie animationData={animation} />
      </div>
    </div>
  );
};

export default Loading;

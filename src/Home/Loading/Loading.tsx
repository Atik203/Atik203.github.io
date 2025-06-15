import React from "react";
import "./loading.css";
import animation from "../../../public/animation.json";
import Lottie from "lottie-react";

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

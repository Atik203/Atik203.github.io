import React from "react";
import "./loading.css";

const Loading: React.FC = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"></div>

      {/* Main loading container */}
      <div className="flex flex-col items-center space-y-8 relative z-10">
        {/* Advanced Multi-layer Loading Animation */}
        <div className="relative">
          {/* Orbital particles */}
          <div className="loading-orbital"></div>

          {/* Floating particles */}
          <div className="loading-particles"></div>

          {/* Main spinner with multiple layers */}
          <div className="loading-spinner">
            <div></div> {/* Outer rotating ring */}
            <div></div> {/* Middle pulsing circle */}
            <div></div> {/* Inner oscillating dots */}
            <div></div> {/* Center glowing core */}
          </div>
        </div>

        {/* Animated text with shimmer effect */}
        <div className="text-center space-y-2">
          <div className="loading-text text-2xl font-bold">
            Loading Portfolio
          </div>
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div
              className="w-3 h-3 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <div className="text-sm text-muted-foreground animate-fade-in">
            Preparing amazing experience for you
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div
        className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-40 right-32 w-2 h-2 bg-purple-500/40 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-40 w-4 h-4 bg-blue-500/20 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-2 h-2 bg-primary/50 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default Loading;

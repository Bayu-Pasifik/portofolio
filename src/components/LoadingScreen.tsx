"use client";

import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-white text-lg mt-4 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

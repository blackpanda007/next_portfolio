"use client";

import { useState, useEffect } from "react";
import Preloader from "components/PreLoader";

const PreloaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a maximum time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Maximum 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    setIsLoading(false);
  };

  return <>{isLoading ? <Preloader onFinish={handleFinish} /> : children}</>;
};

export default PreloaderWrapper;

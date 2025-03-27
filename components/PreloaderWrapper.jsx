"use client";

import { useState } from "react";
import Preloader from "components/PreLoader";

const PreloaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinish = () => {
    setIsLoading(false);
  };

  return <>{isLoading ? <Preloader onFinish={handleFinish} /> : children}</>;
};

export default PreloaderWrapper;

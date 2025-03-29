"use client";

import React from "react";
import Header from "./header";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-30 min-h-screen">{children}</main>
    </>
  );
};

export default PageWrapper;

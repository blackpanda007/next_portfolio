"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { inter, caveat, vt, roboto_mono, jetbrains } from "@/components/fonts";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-8 text-white bg-black/60 backdrop-blur-sm fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        transform: isScrolled ? "translateY(0)" : "translateY(0)",
        willChange: "transform",
      }}
    >
      <div className="w-full px-4 flex justify-between">
        {/* logo here */}
        <Link href="/" scroll={false}>
          <h1 className={`${jetbrains.className} text-4xl pl-5 font-medium `}>
            Satyam<span className="text-[#66FF00]">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden lg:flex items-center gap-8 pr-5">
          <Nav />
          <Link href="/contact" scroll={false}>
            <Button variant="secondary">HIRE ME</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

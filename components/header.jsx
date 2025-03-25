import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 lg:py-10 text-white bg-[#FBA002]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo here */}
        <Link href="/">
          <h1 className="text-4xl font-medium text-[#313B2F]">
            Satyam<span className="text-green-300">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className={undefined} variant={undefined} size={undefined}>
              Hire Me
            </Button>
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

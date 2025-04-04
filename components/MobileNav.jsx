"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {} from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { jetbrains } from "./fonts";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#313B2F]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col max-h-screen">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        {/* logo */}
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/">
            <h1
              className={`text-4xl text-white font-semibold ${
                pathname === "/" ? "text-green-500" : "text-white"
              } ${jetbrains.className}`}
            >
              Satyam<span className="text-green-300">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-start items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-green-500 border-b-2 border-[#313B2F] pointer-events-none"
                    : "text-white"
                } capitalize font-medium hover:text-[#70a765] transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

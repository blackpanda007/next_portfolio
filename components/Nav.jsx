"use client";
/* This directive tells Next.js that this component should be rendered on the client-side rather than server-side.
   It's required when using browser APIs, event listeners, React hooks, or other client-side only features. */

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

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
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            onClick={(e) => {
              e.preventDefault();
              router.push(link.path, {
                onTransitionReady: pageAnimation,
              });
            }}
            key={index}
            className={`${
              link.path === pathname &&
              "text-green-500 border-b-2 border-[#313B2F]"
            } capitalize font-medium hover:text-[#70a765] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1300,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      background: "#000000",
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Nav;

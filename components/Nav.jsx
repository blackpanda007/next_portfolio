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
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = React.useState(false);
  const [visitedPages, setVisitedPages] = React.useState(new Set([pathname]));

  React.useEffect(() => {
    setIsClient(true);

    // Prefetch all pages
    links.forEach((link) => {
      router.prefetch(link.path);
    });
  }, []);

  // Track visited pages
  React.useEffect(() => {
    setVisitedPages((prev) => new Set([...prev, pathname]));
  }, [pathname]);

  const handleNavigation = (e, path) => {
    if (!isClient) return;
    e.preventDefault();

    const isFirstVisit = !visitedPages.has(path);
    router.push(path, {
      onTransitionReady: () => pageAnimation(isFirstVisit),
    });
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        // Prefetch on hover for better performance
        const handleMouseEnter = () => {
          router.prefetch(link.path);
        };

        return (
          <Link
            href={link.path}
            onClick={(e) => handleNavigation(e, link.path)}
            onMouseEnter={handleMouseEnter}
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

const pageAnimation = (isFirstVisit) => {
  if (typeof window === "undefined") return;

  const duration = isFirstVisit ? 300 : 400; // Reduced durations

  // Start the exit animation
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
      duration: isFirstVisit ? duration : 1300,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  // Start the enter animation
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
      duration: isFirstVisit ? duration : 1000,
      background: "#000000",
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Nav;

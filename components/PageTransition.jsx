"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className="h-screen w-screen fixed bg-[#313B2F] top-0 pointer-events-none"
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;

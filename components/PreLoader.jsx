"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { caveat } from "@/components/fonts";

const words = [
  "Hello",
  "नमस्ते",
  "নমস্কার", //bengali
  "ನಮಸ್ಕಾರ", //kannda
  "வணக்கம", //tamil
  "નમસ્તે", //gujju
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", //punjabi
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // marathi
  "WELCOME !!",
];

export default function Preloader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Loop through each word only once
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // If we're at the last word, clear the interval and finish
        if (prevIndex >= words.length - 1) {
          clearInterval(interval);

          // Add a small delay after the last word before finishing
          setTimeout(() => {
            setIsVisible(false);
            onFinish();
          }, 700); // 700ms to view the last word

          return prevIndex;
        }
        // Otherwise move to the next word
        return prevIndex + 1;
      });
    }, 300); // Controls how quickly words change (500ms)

    // Cleanup function
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    isVisible && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }} // Keep opacity at 1 during display
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          key={index}
          className={`text-5xl font-bold ${caveat.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.h1>
      </motion.div>
    )
  );
}

import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    // Orange color when going up
  },
  animate: {
    top: "100%",
    backgroundColor: "#313B2F",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate  the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* rendering 6 motion divs representing steps of a stair
  Each div will have the same animation defined by the StairAnimation onject.
  The delay for each div is calculated dynamically based on it's reversed index, creating a staggered effect with decreasing delay for each subsequent step.
    
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-screen w-screen bg-[#FBA002] relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bodyVariants = {
  initial: {
    height: 0
  },
  animate: {
    height: "8rem",
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  }
};

const eyeVariant1 = {
  initial: {
    height: 0
  },
  animate: {
    height: "2.5rem",
    transition: {
      delay: 0.7
    }
  }
};

const eyeVariant2 = {
  initial: {
    height: 0
  },
  animate: {
    height: "2.5rem",
    transition: {
      delay: 0.8
    }
  }
};
export default function LittleGuy() {
  const [blink1, setblink1] = useState(false);
  const [blink2, setblink2] = useState(false);
  const blink = () => {
    leftblink();
    const blink = setTimeout(() => {
      rightblink();
    }, 100);
    return () => clearInterval(blink);
  };

  const leftblink = () => {
    setblink1(true);
    const blink = setTimeout(() => {
      setblink1(false);
      console.log("blink finis");
    }, 300);
    return () => clearTimeout(blink);
  };

  const rightblink = () => {
    setblink2(true);
    const blink = setTimeout(() => {
      setblink2(false);
      console.log("blink finis");
    }, 300);
    return () => clearTimeout(blink);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (Math.random() > 0.5) {
        blink();
      }
    }, 4000); // 1000 milliseconds = 1 second

    return () => clearInterval(intervalId);
  });
  return (
    <motion.div
      className="absolute right-32 w-32 h-32 bg-white rounded-t-full bottom-16 overflow-hidden"
      variants={bodyVariants}
      initial="initial"
      animate="animate"
      exit={{ height: 0, transition: { delay: 2 } }}
    >
      <motion.div
        className="absolute bg-black bottom-12 left-8 w-5 h-10 rounded-full"
        variants={eyeVariant1}
        initial="initial"
        animate={blink1 ? "initial" : "animate"}
        exit={{ height: "0.5rem", rotate: 10 }}
      ></motion.div>
      <motion.div
        className="absolute bg-black bottom-12 left-[5rem] w-5 h-10 rounded-full"
        variants={eyeVariant2}
        initial="initial"
        animate={blink2 ? "initial" : "animate"}
        exit={{ height: "0.5rem" }}
      ></motion.div>
    </motion.div>
  );
}

import { cubicBezier, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../Hooks/WindowDimension";
export default function LittleGuy({
  clickButton
}: {
  clickButton: () => void;
}) {
  const location = useLocation();
  const [blink1, setblink1] = useState(false);
  const [blink2, setblink2] = useState(false);
  const [off, isOff] = useState(false);
  const [left, lookLeft] = useState(false);
  const [down, lookDown] = useState(false);
  const { width } = useWindowDimensions();
  const bodyVariants = {
    initial: {
      right: 128,
      height: 0
    },
    animate: {
      height: "8rem",
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    },
    moveLeft: {
      height: "8rem",
      right: width / 2,
      marginRight: -64,
      transition: {
        duration: 4,
        ease: cubicBezier(0.4, 0.4, 0, 1)
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
    },
    lookLeft: {
      height: "2.5rem",
      x: -10,
      y: 12
    },
    lookDown: {
      height: "2.5rem",
      y: 20,
      x: ["null", 0],
      transition: {
        delay: 1,
        duration: 3
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
    },
    lookLeft: {
      height: "2.5rem",
      x: -10,
      y: 12
    },
    lookDown: {
      height: "2.5rem",
      x: ["null", 0],
      y: 20,
      transition: {
        delay: 1,
        duration: 3
      }
    }
  };

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
  }, []);

  useEffect(() => {
    if (location.pathname === "/off") {
      lookLeft(true);
      setTimeout(() => {
        lookLeft(false);
        lookDown(true);
        isOff(true);
      }, 2000);
      setTimeout(() => {
        clickButton();
      }, 7000);
    }
  }, [location]);

  return (
    <motion.div
      className="absolute w-32 h-32 bg-white rounded-t-full bottom-16 overflow-hidden"
      variants={bodyVariants}
      initial="initial"
      animate={off ? "moveLeft" : "animate"}
      exit={{ height: 0, transition: { delay: 2 } }}
    >
      <motion.div
        className="absolute bg-black bottom-12 left-8 w-5 h-10 rounded-full"
        variants={eyeVariant1}
        initial="initial"
        animate={
          down ? "lookDown" : left ? "lookLeft" : blink1 ? "initial" : "animate"
        }
        exit={{ height: "0.5rem", rotate: 10 }}
      ></motion.div>
      <motion.div
        className="absolute bg-black bottom-12 left-[5rem] w-5 h-10 rounded-full"
        variants={eyeVariant2}
        initial="initial"
        animate={
          down ? "lookDown" : left ? "lookLeft" : blink2 ? "initial" : "animate"
        }
        exit={{ height: "0.5rem" }}
      ></motion.div>
    </motion.div>
  );
}

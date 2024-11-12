import { motion } from "framer-motion";
import { useState } from "react";

const contentVariants = {
  initial: {
    y: "100vh"
  },
  animate: {
    y: 0
  }
};

const barVariants = {
  initial: {
    height: 0,
    overflow: "hidden",
    transition: {
      duration: 0.1
    }
  },
  animate: {
    height: [0, "3rem"],
    transition: {
      duration: 0.1
    }
  }
};
const textVariants = {
  initial: {
    width: 0,
    overflow: "hidden"
  },
  animate: {
    width: "100%",
    overflow: "hidden",
    transition: {
      duration: 0.5
    }
  }
};

const professions = [
  "",
  "student",
  "Math and Data enthusiast",
  "Front-end Software engineer"
];
export default function Content() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <motion.div
        className="w-screen min-h-screen flex justify-center items-center"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit={{ y: "-100vh" }}
      >
        <div
          className="w-[70%] h-[350px] border-white border-2 rounded-lg p-5"
          onClick={() => {
            if (index === 0) {
              setIndex(index + 1);
              return;
            } else {
              setIndex(0);
              setTimeout(() => {
                if (index > 2) setIndex(0);
                else setIndex(index + 1);
              }, 200);
            }
          }}
        >
          <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-1 w-min gap-2">
            <div className="w-full flex">I'm a: </div>
            <div className="w-[30ch] flex">
              <motion.div
                variants={barVariants}
                initial="initial"
                animate={professions[index].length > 0 ? "animate" : "initial"}
                className="w-1 h-12 bg-white mr-1"
              />
              <motion.div
                variants={textVariants}
                initial="initial"
                animate={professions[index].length > 0 ? "animate" : "initial"}
                className="overflow-hidden text-nowrap"
              >
                {professions[index]}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

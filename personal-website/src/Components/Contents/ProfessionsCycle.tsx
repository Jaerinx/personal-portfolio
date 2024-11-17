import { motion } from "framer-motion";
import { barVariants, textVariants } from "../../Framer-Variants/variants";
import { useEffect, useState } from "react";

const professions = [
  "",
  "student",
  "Math and Data enthusiast",
  "Front-end Software engineer"
];
export default function ProfessionsCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
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
    }, 2000); // 1000 milliseconds = 1 second

    return () => clearInterval(intervalId);
  });
  return (
    <div
      className="grid grid-cols-[repeat(2,max-content)] grid-rows-1 w-min gap-2 text-5xl"
      onClick={() => {
        console.log(index);
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
      <div className="w-full flex ">I'm a: </div>
      <div className="flex">
        <motion.div
          variants={barVariants}
          initial="initial"
          animate={professions[index].length > 0 ? "animate" : "initial"}
          className="w-1 h-[5vw] bg-[#41ff00] mr-1"
        />
        <motion.div
          variants={textVariants}
          initial="initial"
          animate={professions[index].length > 0 ? "animate" : "initial"}
          className="overflow-hidden text-nowrap text-[4vw] ml-4"
        >
          <div className="h-[2rem]"></div>
          {professions[index]}
        </motion.div>
      </div>
    </div>
  );
}

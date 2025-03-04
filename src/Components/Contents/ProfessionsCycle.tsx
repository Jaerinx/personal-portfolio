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
  const [flag, setFlag] = useState(true);
  const click = () => {
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
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flag) {
        click();
        if (index === 3) setFlag(false);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <div
      className="h-[calc(6rem)] p-0 lg:p-4 cursor-pointer z-0 overflow-hidden "
      onClick={click}
    >
      <h1 className="grid grid-cols-[repeat(2,max-content)] grid-rows-1 w-min gap-2 text-header">
        <div className="w-full flex ">: </div>
        <div className="flex">
          <motion.div
            variants={barVariants}
            initial="initial"
            animate={professions[index].length > 0 ? "animate" : "initial"}
            className="w-1 bg-green mr-1"
          />
          <motion.div
            variants={textVariants}
            initial="initial"
            animate={professions[index].length > 0 ? "animate" : "initial"}
            className="overflow-hidden text-nowrap md:text-[3vw] text-header ml-4 flex flex-col-reverse"
          >
            {professions[index]}
          </motion.div>
        </div>
      </h1>
    </div>
  );
}

import { motion } from "framer-motion";
import { barVariants, textVariants } from "../../Framer-Variants/variants";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const professions = [
  "student",
  "Math and Data enthusiast",
  "Front-end Software engineer",
  "ML researcher"
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

export default function ProfessionsCycle() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const click = () => {
    setPlaying(false);
    setIndex((current) => (current + 1) % professions.length);
  };

  useEffect(() => {
    if (reduceMotion || !playing) return;
    const intervalId = setInterval(() => {
      setIndex((current) => {
        if (current >= professions.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, [reduceMotion, playing]);

  return (
    <h1 className="z-0 m-0 h-12 w-[calc(100%-3.25rem)] max-w-full overflow-hidden p-0 text-base md:h-16 md:w-[calc(100%-4.75rem)] md:text-header lg:p-4">
      <button
        type="button"
        aria-label="Cycle profession"
        title={professions[index]}
        className={`grid min-h-11 w-min cursor-pointer grid-cols-[repeat(2,max-content)] grid-rows-1 gap-2 p-0 text-left ${focusRing}`}
        onClick={click}
      >
        <div className="flex w-full">: </div>
        <div className="flex items-stretch">
          <motion.div
            variants={barVariants}
            initial={reduceMotion ? false : "initial"}
            animate="animate"
            className="mr-1 h-5 w-1 origin-bottom bg-green md:h-7"
          />
          <motion.div
            key={professions[index]}
            variants={textVariants}
            initial={reduceMotion ? false : "initial"}
            animate="animate"
            className="ml-2 flex overflow-hidden text-ellipsis text-nowrap text-base md:ml-4 md:text-header"
          >
            {professions[index]}
          </motion.div>
        </div>
      </button>
    </h1>
  );
}

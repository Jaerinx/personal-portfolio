import { useState } from "react";
import "../../Styles/App.css";
import { TypeAnimation } from "react-type-animation";
import Dot from "./Dot";
import useMousePosition from "../../Hooks/MouseTracker";
import { motion } from "framer-motion";
import Arrow from "../All Pages/Arrow";
import useWindowDimensions from "../../Hooks/WindowDimension";
const container = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 0.2,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.005
    }
  }
};

export default function FirstPage() {
  const [doneTyping, setDoneTyping] = useState(false);
  const mousePosition = useMousePosition();
  const { width } = useWindowDimensions();
  const sequence = [
    "Hi.",
    2000,
    "Hi!",
    1000,
    "Hi",
    500,
    "Hi.",
    1000,
    "My naq",
    100,
    "My na",
    50,
    "My name is Hieu.",
    2000,
    "My name is Hieu, from Vietnam",
    1000,
    "My name is Hieu, from Vietnam \nPS C:\\Users\\ADMIN\\Documents\\personal-website>",
    5000,
    "My name is Hieu, from Vietnam \nPS C:\\Users\\ADMIN\\Documents\\personal-website> npm run dev",
    1000,
    () => {
      setDoneTyping(true);
    }
  ];

  return (
    <>
      <motion.div
        className="min-w-screen min-h-screen  flex justify-start m-0 p-[5rem] z-0"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1
        }}
      >
        <div className="max-h-fit">
          <TypeAnimation
            sequence={sequence}
            wrapper="div"
            speed={25}
            style={{
              whiteSpace: "pre-line",
              fontSize: "3vw",
              display: "inline-block",
              maxHeight: "fit-content"
            }}
            repeat={0}
          />

          {doneTyping && (
            <>
              <div className="absolute left-0 right-0 top-0 bottom-0 m-auto max-w-screen max-h-screen overflow-hidden p-[4rem] z-[-1]">
                <motion.div
                  className="grid grid-rows-[repeat(15,auto)] grid-cols-[repeat(20,auto)] gap-7 max-w-full max-h-full overflow-hidden"
                  variants={container}
                  initial="initial"
                  animate="animate"
                >
                  {Array.from({ length: 300 }, (_, index) => (
                    <Dot
                      i={index}
                      key={index}
                      mouse_x={mousePosition.x}
                      mouse_y={mousePosition.y}
                      windowWidth={width}
                    />
                  ))}
                </motion.div>
              </div>
              <Arrow url="/content" />
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

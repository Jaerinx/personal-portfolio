import { useState } from "react";
import "../Styles/App.css";
import { TypeAnimation } from "react-type-animation";
import "../Styles/FirstPage.css";
import Dot from "./Dot";
import useMousePosition from "../Hooks/MouseTracker";
import { motion } from "framer-motion";
import Arrow from "./Arrow";
const container = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 0.01,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.005
    }
  }
};

export default function FirstPage() {
  const [doneTyping, setDoneTyping] = useState(false);
  const mousePosition = useMousePosition();
  console.log(mousePosition);
  return (
    <>
      <div className="min-w-screen min-h-screen m-0 flex justify-center place-items-center ">
        <div className="max-h-fit">
          <TypeAnimation
            sequence={[
              "Hi.",
              1000,
              "My name is Hieu",
              1000,
              "My name is Hieu, from Vietnam",
              1000,
              () => {
                setDoneTyping(true);
              }
            ]}
            wrapper="div"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              maxHeight: "fit-content"
            }}
            repeat={0}
          />
          {doneTyping && (
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto max-w-screen max-h-screen overflow-hidden">
              <motion.div
                className="grid grid-rows-[repeat(15,auto)] grid-cols-[repeat(20,auto)] gap-7"
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
                  />
                ))}
              </motion.div>
              <Arrow />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

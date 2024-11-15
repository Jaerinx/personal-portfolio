import { useState } from "react";
import power from "/power.svg";
import LittleGuy from "./LittleGuy";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";

const powerVariants = {
  initial: {
    y: 0,
    transition: {
      duration: 0
    }
  },
  animate: {
    y: "0.25rem",
    transition: {
      duration: 0
    }
  }
};
export default function Computer() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute w-screen h-full ">
        <div className=" absolute w-full min-h-full border-[4rem] border-[#F3EFE0] m-0 rounded-lg z-[-2]"></div>
        <div className=" absolute w-[calc(100vw-2.5rem)] h-[calc(100vh-2rem)] rounded-lg border-[0.5rem] border-[#c8c3b4] m-[1rem] z-[-1]"></div>
        <div className="bg-shadow_beige absolute bottom-[0.5rem] left-1/2 w-[3rem] ml-[-1.5rem] rounded-full translate-y-1 h-[3rem] z-1"></div>
        <motion.div
          className="bg-dark_beige absolute bottom-[0.5rem] left-1/2 w-[3rem] ml-[-1.5rem] rounded-full z-2"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => {
            navigate("/off");
          }}
          variants={powerVariants}
          animate={hover ? "animate" : ""}
        >
          <img
            src={power}
            alt=""
            style={{
              filter: `${
                hover
                  ? "invert(14%) sepia(97%) saturate(7444%) hue-rotate(0deg) brightness(103%) contrast(105%)"
                  : ""
              } `,
              cursor: "pointer"
            }}
          />
        </motion.div>
        <AnimatePresence mode="wait">{hover && <LittleGuy />}</AnimatePresence>
      </div>
      <Outlet />
    </>
  );
}

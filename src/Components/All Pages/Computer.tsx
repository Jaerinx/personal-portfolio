import { useState } from "react";
import power from "/power.svg";
import LittleGuy from "./LittleGuy";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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
  const [buttonHover, setbuttonHover] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clickButton = () => {
    setbuttonHover(true);
    setTimeout(() => {
      setbuttonHover(false);
      navigate("/");
    }, 500);
  };
  return (
    <>
      <div className="absolute w-screen h-full cursor-default hidden md:inline ">
        <div className=" absolute w-full min-h-full border-[2.5vw] border-beige m-0 rounded-lg z-[-2]"></div>
        <div className=" absolute w-[calc(98vw)] h-[calc(100vh-2vw)] rounded-lg border-[0.5rem] border-dark_beige m-[1vw] z-[-1]"></div>
        <div className="bg-shadow_beige absolute bottom-[0.5rem] left-1/2 w-[2vw] ml-[-1.5rem] rounded-full translate-y-1 h-[2vw] z-1 hidden lg:inline"></div>
        <motion.div
          className="bg-dark_beige absolute bottom-[0.5rem] left-1/2 w-[2vw] ml-[-1.5rem] rounded-full z-2 hidden lg:inline"
          onMouseEnter={() => {
            setbuttonHover(true);
          }}
          onMouseLeave={() => {
            setbuttonHover(false);
          }}
          onClick={() => {
            setbuttonHover(false);
            navigate("/off");
          }}
          variants={powerVariants}
          animate={buttonHover ? "animate" : ""}
        >
          <img
            src={power}
            alt=""
            className=""
            style={{
              filter: `${
                buttonHover
                  ? "invert(14%) sepia(97%) saturate(7444%) hue-rotate(0deg) brightness(70%) contrast(105%)"
                  : ""
              } `,
              cursor: "pointer"
            }}
          />
        </motion.div>
        <AnimatePresence mode="wait">
          {(buttonHover || location.pathname === "/off") && (
            <LittleGuy clickButton={clickButton} />
          )}
        </AnimatePresence>
      </div>
      <Outlet />
    </>
  );
}

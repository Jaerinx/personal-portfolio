import { useState } from "react";
import power from "/power.svg";
import LittleGuy from "./LittleGuy";
import CrtChassis from "./CrtChassis";
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
      <CrtChassis />

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[30] hidden h-[3.5rem] lg:block">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [perspective:280px]"
        >
          <div
            className="relative size-[clamp(2.75rem,2.5vw,3.1rem)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 rounded-full bg-shadow_beige"
              style={{ transform: "translateZ(-12px) translateY(5px)" }}
            />
            <div
              className="absolute -inset-[3px] rounded-full"
              style={{
                transform: "translateZ(-6px)",
                background:
                  "linear-gradient(145deg, #d4d0c4 0%, #8f8b7e 42%, #594a37 100%)"
              }}
            />
            <div
              className="relative size-full"
              style={{ transform: "translateZ(4px)" }}
            >
              <motion.button
                type="button"
                aria-label="Power"
                className="pointer-events-auto relative block size-full cursor-pointer rounded-full bg-dark_beige p-[0.2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
                onMouseEnter={() => setbuttonHover(true)}
                onMouseLeave={() => setbuttonHover(false)}
                onClick={() => {
                  setbuttonHover(false);
                  navigate("/off");
                }}
                variants={powerVariants}
                animate={buttonHover ? "animate" : "initial"}
              >
                <img
                  src={power}
                  alt=""
                  width={48}
                  height={48}
                  className="size-full"
                  style={{
                    filter: buttonHover
                      ? "invert(14%) sepia(97%) saturate(7444%) hue-rotate(0deg) brightness(70%) contrast(105%)"
                      : ""
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-[40] hidden overflow-visible lg:block">
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

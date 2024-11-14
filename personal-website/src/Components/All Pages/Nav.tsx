import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <>
      <div className="absolute w-screen h-full ">
        <div className=" absolute w-full min-h-full border-[4rem] border-[#F3EFE0] m-0 rounded-lg"></div>
        <div className=" absolute w-[calc(100vw-2.5rem)] h-[calc(100vh-2rem)] rounded-lg border-[0.5rem] border-[#c8c3b4] m-[1rem] z-0"></div>
      </div>
      <motion.div
        className="fixed top-0 h-[20%] w-screen m-0 flex justify-end content-center p-[4.5rem] z-50 pr-[6rem]"
        exit={{ y: "-100vh" }}
      >
        <NavItem content="Home" delay={0.1} location="/" />
        <NavItem content="About me" delay={0.2} location="/content" />
        <NavItem content="Projects" delay={0.3} location="/" />
        <NavItem content="Resume" delay={0.4} location="/" />
      </motion.div>
      <Outlet />
    </>
  );
}

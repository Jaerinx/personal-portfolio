import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <>
      <motion.div
        className=" fixed top-0 h-[10%] w-screen m-0 flex justify-end content-center p-[3.5vw] z-50 pr-[4vw]"
        exit={{ y: "-100vh" }}
      >
        <NavItem content="Home" delay={0.1} location="/" />
        <NavItem content="About me" delay={0.2} location="/content" />
        <NavItem content="Projects" delay={0.3} location="/" />
        <NavItem content="Resume" delay={0.4} location="/resume" />
      </motion.div>
      <Outlet />
    </>
  );
}

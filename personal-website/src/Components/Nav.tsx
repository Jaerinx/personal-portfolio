import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";

const navVariants = {
  initial: {
    y: "-100vh"
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};
const buttonStyle =
  "mx-1 border-2 border-slate-50 rounded-lg px-1 opacity-0.5 opacity-50 text-slate-400 hover:text-slate-400 hover:text-opacity-40 duration-100";
export default function Nav() {
  return (
    <>
      <motion.div
        className="fixed top-0 h-[10%] w-screen m-0 p-3 flex justify-end content-center "
        variants={navVariants}
        initial="initial"
        animate="animate"
        exit={{ y: "-100vh" }}
      >
        <motion.div variants={navVariants}>
          <NavLink to="/" className={buttonStyle}>
            Home
          </NavLink>
        </motion.div>
        <motion.div className="" variants={navVariants}>
          <NavLink to="/" className={buttonStyle}>
            Home
          </NavLink>
        </motion.div>
        <motion.div className="" variants={navVariants}>
          <NavLink to="/" className={buttonStyle}>
            Home
          </NavLink>
        </motion.div>
        <motion.div className="" variants={navVariants}>
          <NavLink to="/" className={buttonStyle}>
            Home
          </NavLink>
        </motion.div>
      </motion.div>
      <Outlet />
    </>
  );
}

import { motion } from "framer-motion";
import { navVariants, navShadowVariants } from "../../Framer-Variants/variants";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const buttonStyle = `mx-1 border-2 border-dark_green rounded-lg px-1 opacity-50 text-dark_green text-2xl duration-100`;
export default function NavItem({
  content,
  delay,
  location
}: {
  content: string;
  delay: number;
  location: string;
}) {
  const url = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (url.pathname === location) setActive(true);
      else setActive(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return (
    <motion.div
      variants={navVariants}
      initial="initial"
      animate={active ? "hover" : "animate"}
      transition={{
        delay: delay,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      whileHover="hover"
    >
      <NavLink
        to={location}
        className={buttonStyle}
        onClick={(e) => {
          if (active) e.preventDefault();
        }}
      >
        {content}
      </NavLink>
      <motion.div
        className={buttonStyle + ` w-[78%] border-dark_green`}
        variants={navShadowVariants}
      ></motion.div>
    </motion.div>
  );
}

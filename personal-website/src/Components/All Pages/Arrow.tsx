import { motion } from "framer-motion";
import arrow from "/Arrow.svg";
import { Link } from "react-router-dom";
const arrowVariants = {
  initial: {
    y: "100vh"
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 50,
      duration: 0.3,
      delay: 1
    }
  },
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      repeat: Infinity,
      duration: 0.5,
      delay: 0.1
    }
  }
};
export default function Arrow({ url }: { url: string }) {
  return (
    <Link to={url}>
      <motion.img
        src={arrow}
        alt=""
        variants={arrowVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="w-[2%] absolute bottom-20 left-1/2 cursor-pointer"
      />
    </Link>
  );
}

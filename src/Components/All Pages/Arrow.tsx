import { motion } from "framer-motion";
import arrow from "/Arrow.svg";
import { Link } from "react-router-dom";

const arrowVariants = {
  initial: {
    y: 48,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      delay: 0.15
    }
  },
  hover: {
    scale: [1, 1.12, 1],
    transition: {
      repeat: Infinity,
      duration: 0.55
    }
  }
};

export default function Arrow({
  url,
  label = "about me"
}: {
  url: string;
  label?: string;
}) {
  return (
    <Link
      to={url}
      aria-label={label}
      className="group mt-8 inline-flex min-h-12 items-center gap-3 pr-4 md:mt-10"
    >
      <motion.img
        src={arrow}
        alt=""
        variants={arrowVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="w-10 cursor-pointer md:w-14"
      />
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ delay: 0.35 }}
        className="text-xl text-green md:text-2xl"
        style={{ fontFamily: "DOS" }}
      >
        {label}
      </motion.span>
    </Link>
  );
}

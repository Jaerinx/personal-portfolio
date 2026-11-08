import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import { ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function AnimationContainer({
  children,
  delay = 0,
  className = "",
  id
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const Tag = id ? motion.main : motion.div;
  return (
    <Tag
      id={id}
      tabIndex={id ? -1 : undefined}
      className={`${className}${
        id
          ? " focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-blue"
          : ""
      }`}
      variants={contentVariants}
      initial={reduceMotion ? false : "initial"}
      animate="animate"
      transition={{ delay: reduceMotion ? 0 : delay }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
    >
      {children}
    </Tag>
  );
}

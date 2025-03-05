import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import { ReactNode } from "react";

export default function AnimationContainer({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={contentVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: delay }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

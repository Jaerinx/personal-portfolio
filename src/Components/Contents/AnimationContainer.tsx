import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import { Children, ReactNode } from "react";

export default function AnimationContainer({
  children,
  delay = 0,
  className=""
}: {
  children: ReactNode;
  delay?: number;
  className?:string
}) {
  const arrayChildren = Children.toArray(children);
  console.log(arrayChildren.length)
  return (
    <motion.div
      className={className}
      variants={contentVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: delay, staggerChildren:0.2}}
      exit={{ opacity: 0 }}
    >
      {arrayChildren.length>1?Children.map(arrayChildren,(child,index)=>{
        return(
          <motion.div variants={contentVariants} key={index}>
          {child}
          </motion.div>
          
        )
      }):children}
    </motion.div>
  );
}

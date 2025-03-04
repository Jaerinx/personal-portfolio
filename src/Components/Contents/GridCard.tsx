import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
// import { useEffect, useRef } from "react";

export default function GridCard({
  contents,
  delay
}: {
  contents: Array<string> | Array<ReactNode>;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay
      }
    }
  };
  return (
    <>
      <motion.div
        ref={ref}
        className=" rounded-lg text-[1.3vw] w-full float-start mb-5 duration-100"
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {contents.map((content) => {
          if (typeof content === "object") {
            return content;
          } else {
            return <span>{content}</span>;
          }
        })}
      </motion.div>
    </>
  );
}

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function GridCard({
  contents,
  delay
}: {
  contents: Array<string> | Array<ReactNode>;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const cardVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: reduceMotion ? 0 : delay, duration: reduceMotion ? 0 : 0.3 }
    }
  };
  return (
    <motion.div
      ref={ref}
      className="mb-4 w-full text-[1.05rem] md:text-paragraph"
      variants={cardVariants}
      initial={reduceMotion ? false : "initial"}
      animate={reduceMotion || isInView ? "animate" : "initial"}
    >
      {contents.map((content, index) => {
        if (typeof content === "object") {
          return <div key={index}>{content}</div>;
        }
        return <span key={index}>{content}</span>;
      })}
    </motion.div>
  );
}

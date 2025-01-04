import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
// import { useEffect, useRef } from "react";

export default function GridCard({
  title,
  contents,
  delay
}: {
  title: string;
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
        className="border-white border-2 rounded-lg p-5 text-[1.3vw] ml-5 w-auto max-w-[45%] float-start min-h-[40vh] mb-5"
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        style={{ marginTop: `${(delay - 0.2) * 40}vh` }}
      >
        <div className="text-white">{title}</div>

        <div className="w-full h-[1px] bg-white"></div>
        <ul className="list-disc pl-5 ">
          {contents.map((content) => {
            if (typeof content === "object") {
              return content;
            } else {
              return <li>{content}</li>;
            }
          })}
        </ul>
      </motion.div>
    </>
  );
}

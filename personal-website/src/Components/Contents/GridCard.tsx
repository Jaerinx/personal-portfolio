import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

export default function GridCard({
  title,
  contents,
  delay
}: {
  title: string;
  contents: Array<string>;
  delay: number;
}) {
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
        className=" border-white border-2 rounded-lg p-5 text-[3vh]"
        variants={cardVariants}
      >
        {title}
        <div className="w-full h-[1px] bg-white"></div>
        <ul className="list-disc pl-5">
          {contents.map((content) => {
            return (
              <li>
                <span className="relative left-0">{content}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}

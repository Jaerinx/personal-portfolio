import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import ProfessionsCycle from "./ProfessionsCycle";
import GridCard from "./GridCard";
const information = [
  {
    title: "Skills",
    content: [
      "React.js",
      "Typescript",
      "Python",
      "HTML",
      "CSS",
      "javascript",
      "Java",
      "SQL"
    ]
  },
  {
    title: "Education",
    content: ["British International School HCMC", "UCSD"]
  },
  {
    title: "Affiliations",
    content: [
      "Data Science Student Society",
      "Triton Engineering Student Council"
    ]
  }
];

export default function Content() {
  return (
    <motion.div
      className="w-screen min-h-screen flex justify-center items-center z-0"
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <div className="absolute top-32 grid grid-cols-1 grid-rows-[1fr_auto] w-[calc(100vw-12rem)] border-spacing-2 ">
        <div className="h-[calc(5vw+5rem)] border-white border-2 rounded-t-lg p-5 cursor-pointer z-50 overflow-hidden ">
          <ProfessionsCycle />
        </div>
        <div className=" h-[calc(100vh-5vw-18rem)] border-white border-2 border-t-0 rounded-b-lg p-5 overflow-y-auto flex justify-center">
          <div className="grid grid-cols-3  w-[95%] gap-2">
            {information.map((item, index) => {
              return (
                <GridCard
                  title={item.title}
                  contents={item.content}
                  delay={0.2 + index * 0.2}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

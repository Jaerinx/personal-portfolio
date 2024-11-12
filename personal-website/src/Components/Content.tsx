import { motion } from "framer-motion";

const contentVariants = {
  initial: {
    y: "100vh"
  },
  animate: {
    y: 0
  }
};
export default function Content() {
  return (
    <>
      <motion.div
        className="w-screen min-h-screen flex justify-center items-center"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit={{ y: "-100vh" }}
      >
        <div className="w-[70%] h-[350px] border-white border-2 rounded-lg">
          content
        </div>
      </motion.div>
    </>
  );
}

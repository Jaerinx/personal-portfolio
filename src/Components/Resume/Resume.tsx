import { Document, Page, pdfjs } from "react-pdf";
import resume from "/HIEU-NGUYEN-SWE-INTERN-REACT-FRONTEND-DEV.pdf";
import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import useWindowDimensions from "../../Hooks/WindowDimension";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaPrint } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const { width } = useWindowDimensions();
  const heightFactor = 585 / 452;

  return (
    <motion.div
      className="w-screen min-h-screen flex justify-center items-center "
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <div className="w-[calc(100vw-6.8rem)] h-[calc(100vh-7rem)]  rounded-lg p-0 cursor-default z-0 flex justify-center">
        <a
          href={resume}
          target="_blank"
          className="mr-1 text-header  hover:opacity-80 opacity-50 duration-100"
        >
          <FaPrint />
        </a>
        <div
          className={`w-[${width * 0.6}] h-[${
            width * 0.6 * heightFactor
          }] overflow-auto p-3 border-2 border-white rounded-lg relative`}
        >
          <Document file={resume}>
            <Page
              pageNumber={1}
              width={width * 0.6}
              renderTextLayer={false}
              className="opacity-90 md:scale-100 scale-150 origin-top-left"
            />
          </Document>
        </div>
      </div>
    </motion.div>
  );
}

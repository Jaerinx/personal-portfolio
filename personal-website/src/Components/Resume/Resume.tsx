import { Document, Page, pdfjs } from "react-pdf";
import resume from "/Resume.pdf";
import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import useWindowDimensions from "../../Hooks/WindowDimension";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
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
      <div className="w-[90%] h-[calc(100vh-15rem)] border-white border-2 rounded-lg p-5 cursor-pointer z-50 flex justify-center">
        <div
          className={`w-[${width * 0.6}] h-[${
            width * 0.6 * heightFactor
          }] overflow-auto p-3 border-2 border-white rounded-lg`}
        >
          <Document file={resume}>
            <Page pageNumber={1} width={width * 0.6} renderTextLayer={false} />
          </Document>
        </div>
      </div>
    </motion.div>
  );
}

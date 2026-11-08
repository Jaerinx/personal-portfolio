import { Document, Page, pdfjs } from "react-pdf";
import resume from "/Hieu_Nguyen_Resume.pdf";
import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import useWindowDimensions from "../../Hooks/WindowDimension";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useMediaQuery } from "usehooks-ts";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

const phosphorPage =
  "origin-top-left [filter:grayscale(1)_sepia(0.28)_hue-rotate(62deg)_saturate(1.15)_brightness(1.12)]";

export default function Resume() {
  const { width } = useWindowDimensions();
  const gutter = width >= 1024 ? 96 : width >= 768 ? 72 : 40;
  const stacked = width < 640;
  const pageWidth = Math.max(
    180,
    Math.min(width * 0.72, width - gutter * 2 - (stacked ? 8 : 96))
  );
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <motion.main
      id="main"
      tabIndex={-1}
      className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-full max-w-full flex-col items-center overflow-hidden px-[var(--crt-gutter)] pb-[var(--crt-gutter-bottom)] pt-[var(--crt-gutter)] outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-blue"
      variants={contentVariants}
      initial={reduceMotion ? false : "initial"}
      animate="animate"
      exit={reduceMotion ? undefined : { opacity: 0 }}
    >
      <h1
        className="mb-3 w-full shrink-0 pr-16 text-green md:mb-4 md:pr-24"
        style={{ fontFamily: "DOS" }}
      >
        RESUME.PDF
      </h1>
      <div className="z-0 flex min-h-0 w-full flex-1 cursor-default flex-col justify-center gap-3 sm:flex-row">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          aria-label="Open resume PDF"
          className={`inline-flex min-h-12 shrink-0 items-center self-start border border-green px-3 text-green transition-colors duration-150 hover:bg-green hover:text-blue active:translate-y-px ${focusRing}`}
          style={{ fontFamily: "DOS" }}
        >
          [ PRINT ]
        </a>
        <div
          className="relative min-w-0 flex-1 overflow-auto border border-green bg-blue p-2"
          style={{ maxWidth: pageWidth + 16 }}
        >
          <Document file={resume}>
            <Page
              pageNumber={1}
              width={pageWidth}
              renderTextLayer={false}
              className={phosphorPage}
            />
          </Document>
        </div>
      </div>
    </motion.main>
  );
}

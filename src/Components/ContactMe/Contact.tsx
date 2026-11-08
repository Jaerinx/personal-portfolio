import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";
const field =
  "min-h-11 border border-green bg-transparent px-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

export default function Contact() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const onSubmit = async () => {
    setSending(true);
    setResult("Sending…");
    if (!form.current) {
      setResult("Empty form.");
      setSending(false);
      return;
    }
    const formData = new FormData(form.current);
    formData.append("access_key", "450cdfba-cb76-4252-9373-045e388eb38a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Got it.");
      form.current.reset();
      setTimeout(() => {
        setResult("Heading home…");
      }, 1000);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setResult(data.message);
      setSending(false);
    }
  };

  return (
    <motion.main
      id="main"
      tabIndex={-1}
      className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-full max-w-full items-center justify-center overflow-hidden px-[var(--crt-gutter)] pb-[var(--crt-gutter-bottom)] pt-[var(--crt-gutter)] outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-blue"
      variants={contentVariants}
      initial={reduceMotion ? false : "initial"}
      animate="animate"
      exit={reduceMotion ? undefined : { opacity: 0 }}
    >
      <div className="relative z-10 flex h-full min-h-0 w-full max-w-md cursor-default items-center justify-center">
        <Link
          to="/"
          aria-label="Back"
          className={`absolute left-0 top-0 inline-flex min-h-11 min-w-11 items-center justify-center border border-green px-3 text-green hover:bg-green hover:text-blue ${focusRing}`}
          style={{ fontFamily: "DOS" }}
        >
          &lt;
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          ref={form}
          className="flex h-full min-h-0 w-full flex-col gap-3 overflow-y-auto py-14 text-[1.05rem] md:gap-4 md:py-8 md:text-lg"
          style={{ fontFamily: "DOS" }}
        >
          <h1 className="m-0">Contact me</h1>
          <label className="flex flex-col gap-2 text-green">
            NAME:
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Hieu…"
              required
              className={field}
            />
          </label>
          <label className="flex flex-col gap-2 text-green">
            MAIL:
            <input
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="vin028@ucsd.edu…"
              required
              className={field}
            />
          </label>
          <label className="flex min-h-24 flex-1 flex-col gap-2 text-green">
            MSG:
            <textarea
              name="message"
              placeholder="What should I know…"
              required
              className={`${field} h-full min-h-24 py-2`}
            ></textarea>
          </label>
          {result && (
            <span className="text-green" aria-live="polite">
              {result}
            </span>
          )}
          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className={`min-h-12 border border-green py-2 text-green transition-colors duration-150 hover:bg-green hover:text-blue active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 ${focusRing}`}
          >
            [ SEND ]
          </button>
        </form>
      </div>
    </motion.main>
  );
}

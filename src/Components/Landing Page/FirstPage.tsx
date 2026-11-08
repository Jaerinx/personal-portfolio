import { useEffect } from "react";
import "../../Styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import Hieu from "../../Static/contents_statics/Hieu.png";
import PhosphorField from "./PhosphorField";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

const portraitImg =
  "h-full w-full origin-[64%_34%] scale-[4.2] object-cover object-[64%_34%] [filter:grayscale(1)_sepia(0.28)_hue-rotate(62deg)_saturate(1.15)_brightness(1.12)]";

export default function FirstPage() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") navigate("/content");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <div className="relative z-0 flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden px-[var(--crt-gutter)] pb-[var(--crt-gutter-bottom)] pt-[var(--crt-gutter)] text-left tracking-normal">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <PhosphorField />
      </div>

      <main
        id="main"
        tabIndex={-1}
        className="relative z-10 flex min-h-0 flex-1 flex-col outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-blue"
      >
        <div
          className="mb-3 flex flex-col gap-2 overflow-hidden border-b border-green/30 pb-2 pr-14 text-[11px] leading-4 tracking-[0.12em] text-green sm:mb-5 sm:flex-row sm:items-center sm:gap-4 md:mb-6 md:pr-28 lg:mb-8"
          style={{ fontFamily: "DOS" }}
        >
          <span>SYS.OK</span>
          <span>UCSD ’28</span>
          <span className="truncate tracking-[0.14em] text-green [text-shadow:0_0_8px_rgba(130,192,92,0.45)]">
            SEEKING SWE / ML INTERN
          </span>
          <a
            href="mailto:vin028@ucsd.edu"
            className={`inline-flex min-h-11 max-w-full items-center truncate text-green/80 hover:text-green sm:ml-auto ${focusRing}`}
          >
            vin028@ucsd.edu
          </a>
        </div>

        <div className="grid min-h-0 min-w-0 flex-1 grid-cols-1 content-center gap-3 sm:gap-4 md:grid-cols-[minmax(0,1fr)_minmax(11rem,min(18rem,36%))] md:grid-rows-[minmax(0,1fr)_auto] md:items-center md:gap-x-8 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,min(22rem,26vw))] lg:gap-x-10">
          <div className="min-w-0 md:col-start-1 md:row-start-1 md:self-center">
            <p
              className="mb-2 text-xs leading-4 tracking-[0.16em] text-green"
              style={{ fontFamily: "DOS" }}
            >
              LOGIN:
            </p>
            <h1 className="hero-name" translate="no">
              Hieu
              <span className="block">Nguyen</span>
            </h1>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-green md:col-start-1 md:row-start-2"
            style={{ fontFamily: "DOS" }}
          >
            <Link
              to="/content"
              className={`group inline-flex min-h-12 items-center gap-2 border border-green bg-green px-4 text-blue transition-colors duration-150 hover:bg-transparent hover:text-green active:translate-y-px ${focusRing}`}
            >
              [ ENTER ]
              <span
                className={`inline-block h-4 w-2 bg-blue group-hover:bg-green ${
                  reduceMotion ? "" : "motion-safe:animate-pulse"
                }`}
              />
            </Link>
            <Link
              to="/resume"
              className={`inline-flex min-h-12 items-center text-sm tracking-[0.16em] text-green/80 transition-colors duration-150 hover:text-green active:translate-y-px ${focusRing}`}
            >
              RESUME.PDF
            </Link>
          </div>

          <figure className="contents">
            <div className="crt-tube relative w-[min(100%,13rem)] min-w-0 justify-self-start sm:w-[min(100%,15rem)] md:col-start-2 md:row-start-1 md:w-full md:justify-self-stretch">
              <div className="crt-tube-face relative aspect-square overflow-hidden border border-green bg-blue p-2 shadow-[0_0_56px_rgba(130,192,92,0.4)]">
                <img
                  src={Hieu}
                  alt="Hieu Nguyen"
                  width={640}
                  height={640}
                  fetchPriority="high"
                  className={portraitImg}
                />
                <div className="pointer-events-none absolute inset-2 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(4,0,28,0.22)_3px)]" />
                <div className="pointer-events-none absolute inset-2 bg-gradient-to-tl from-[#04001c] from-[8%] via-[#04001c]/70 via-[22%] to-transparent to-[42%]" />
                <div className="pointer-events-none absolute inset-2 bg-gradient-to-l from-[#04001c] via-[#04001c]/85 via-[18%] to-transparent to-[26%]" />
              </div>
            </div>
            <figcaption
              className="min-h-11 min-w-0 content-center text-sm tracking-[0.06em] text-green whitespace-normal break-words md:col-start-2 md:row-start-2 md:min-h-12 md:text-base lg:text-lg [text-shadow:0_0_8px_rgba(130,192,92,0.55)]"
              style={{ fontFamily: "DOS" }}
            >
              <a
                href="https://portal.tescatucsd.org/bulletin/-1"
                target="_blank"
                rel="noreferrer"
                className={`inline-block max-w-full py-2 px-1 transition-colors duration-150 hover:bg-green hover:text-blue active:translate-y-px ${focusRing}`}
              >
                &gt; portal.exe · 1,000+ users · 50 orgs
              </a>
            </figcaption>
          </figure>
        </div>
      </main>
    </div>
  );
}

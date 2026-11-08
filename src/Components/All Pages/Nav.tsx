import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

export default function Nav() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <>
      <button
        type="button"
        className={`sr-only z-[60] bg-blue px-3 py-2 text-green focus:not-sr-only focus:fixed focus:left-[var(--crt-gutter)] focus:top-[var(--crt-gutter)] ${focusRing}`}
        style={{ fontFamily: "DOS" }}
        onClick={() => document.getElementById("main")?.focus()}
      >
        Skip to content
      </button>
      <nav
        className="fixed right-0 top-0 z-50 m-0 flex h-fit w-fit cursor-default justify-end p-[var(--crt-gutter)]"
        style={{ fontFamily: "DOS" }}
        onMouseEnter={() => {
          if (canHover) setActive(true);
        }}
        onMouseLeave={() => {
          if (canHover) setActive(false);
        }}
      >
        <div className="z-50 flex h-min flex-col items-end justify-start gap-4 bg-blue/90 p-3">
          <button
            type="button"
            aria-label={active ? "Close menu" : "Open menu"}
            aria-expanded={active}
            className={`grid min-h-11 min-w-11 cursor-pointer grid-rows-[repeat(3,min-content)] content-center justify-items-end gap-1 border border-transparent px-1 transition-colors duration-150 hover:border-green hover:bg-green/10 active:translate-y-px ${
              active ? "border-green bg-green/15" : ""
            } ${focusRing}`}
            onClick={() => setActive((open) => !open)}
          >
            <div className="h-1 w-7 bg-green"></div>
            <div className="h-1 w-6 bg-green"></div>
            <div className="h-1 w-5 bg-green"></div>
          </button>
          <div
            className={`flex flex-col items-end gap-2 ${
              active ? "flex" : "hidden"
            }`}
          >
            <NavItem content="Home" location="/" />
            <NavItem content="About me" location="/content" />
            <NavItem content="Resume" location="/resume" />
            <NavItem content="Contact Me" location="/contact-me" />
            <div className="mt-2 flex flex-col items-end gap-1 text-sm text-green">
              <a
                href="https://www.linkedin.com/in/vietminhhieunguyen/"
                className={`inline-flex min-h-11 items-center px-1 text-green transition-colors duration-150 hover:bg-green hover:text-blue active:translate-y-px ${focusRing}`}
              >
                linkedin
              </a>
              <a
                href="mailto:vin028@ucsd.edu"
                className={`inline-flex min-h-11 items-center px-1 text-green transition-colors duration-150 hover:bg-green hover:text-blue active:translate-y-px ${focusRing}`}
              >
                mail
              </a>
              <a
                href="https://github.com/Jaerinx"
                className={`inline-flex min-h-11 items-center px-1 text-green transition-colors duration-150 hover:bg-green hover:text-blue active:translate-y-px ${focusRing}`}
              >
                github
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

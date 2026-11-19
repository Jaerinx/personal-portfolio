import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { LinkedinFilled, GithubFilled, MailFilled } from "@ant-design/icons";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

export default function Nav() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setActive(false);
    }, 2000);
    return () => clearTimeout(timeOutID);
  }, [location]);

  // Fixed open height so expand animation doesn't reflow sibling chrome
  const openHeight = isDesktop ? "22rem" : "15rem";
  const closedHeight = "3rem";

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
        onMouseEnter={() => {
          if (canHover) setActive(true);
        }}
        onMouseLeave={() => {
          if (canHover) setActive(false);
        }}
      >
        <div
          className={`z-50 flex h-min flex-col items-end justify-start gap-5 overflow-hidden p-3 ${
            active ? "backdrop-blur" : ""
          } ${reduceMotion ? "" : "duration-700"}`}
          style={{
            height: active ? openHeight : closedHeight
          }}
        >
          <button
            type="button"
            aria-label={active ? "Close menu" : "Open menu"}
            aria-expanded={active}
            className={`grid min-h-[2rem] w-fit cursor-pointer grid-rows-[repeat(3,min-content)] content-center justify-items-end ${focusRing}`}
            style={{ gap: active ? "0.5rem" : "0.4rem" }}
            onClick={() => setActive((open) => !open)}
          >
            <div className="ml-auto h-1 w-7 bg-green"></div>
            <div className="ml-auto h-1 w-6 bg-green"></div>
            <div className="ml-auto h-1 w-5 bg-green"></div>
          </button>

          <div className="m-0 flex min-h-[12.5rem] flex-col items-end gap-5 p-0">
            <NavItem content="Home" location="/" />
            <NavItem content="About me" location="/content" />
            <NavItem content="Resume" location="/resume" />
            <NavItem content="Contact Me" location="/contact-me" />
          </div>

          <div className="flex h-8 w-fit shrink-0 items-center text-[2rem]">
            <a
              href="https://www.linkedin.com/in/vietminhhieunguyen/"
              aria-label="LinkedIn"
              className={focusRing}
            >
              <LinkedinFilled className="mx-1 text-white duration-200 hover:text-green" />
            </a>
            <a
              href="mailto:vin028@ucsd.edu"
              aria-label="Email"
              className={focusRing}
            >
              <MailFilled className="mx-1 text-white duration-200 hover:text-green" />
            </a>
            <a
              href="https://github.com/Jaerinx"
              aria-label="GitHub"
              className={focusRing}
            >
              <GithubFilled className="mx-1 text-white duration-200 hover:text-green" />
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

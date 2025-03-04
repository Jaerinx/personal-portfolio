import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Nav() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const matchmedia = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setActive(false);
    }, 2000);
    return () => {
      clearTimeout(timeOutID);
    };
  }, [location]);
  return (
    <>
      <div className="fixed cursor-default top-0 right-0 w-fit h-fit m-0 flex justify-end content-center md:p-[2.25rem] z-50 md:pr-[1.25rem] xl:p-[3.25rem] p-4">
        <div
          className="flex rounded-lg justify-end gap-5 overflow-hidden duration-500 items-center h-min p-3"
          onMouseOver={() => {
            setActive(true);
          }}
          onMouseOut={() => {
            setActive(false);
          }}
          style={{
            width: active ? "34rem" : "4rem"
          }}
        >
          <div className="p-0 m-0 flex gap-5">
            {matchmedia && (
              <>
                <NavItem content="Home" location="/" />
                <NavItem content="About me" location="/content" />
                <NavItem content="Resume" location="/resume" />
                <NavItem content="Contact Me" location="/contact-me" />
              </>
            )}
            {!matchmedia && (
              <>
                <NavItem content="About me" location="/" />
                <NavItem content="Resume" location="/resume" />
                <NavItem content="Contact Me" location="/contact-me" />
              </>
            )}
          </div>

          <div
            className="grid grid-row-3 cursor-pointer duration-100 delay-500 h-fit w-fit mr-4"
            style={{ gap: active ? "0.5rem" : "0.4rem" }}
          >
            <div className="w-7 h-1 bg-green"></div>
            <div className="w-7 h-1 bg-green"></div>
            <div className="w-7 h-1 bg-green"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

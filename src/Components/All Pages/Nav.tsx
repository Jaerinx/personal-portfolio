import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { LinkedinFilled, GithubFilled, MailFilled } from "@ant-design/icons";
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
      <div className="fixed cursor-default top-0 right-0 w-fit h-fit m-0 flex justify-end content-center md:p-[3.5rem] z-50 md:pr-[4rem] p-4">
        <div
          className={`flex rounded-lg justify-start items-end gap-5 flex-col overflow-hidden duration-700 h-min p-3 z-50 ${
            active ? "backdrop-blur" : ""
          }`}
          onMouseOver={() => {
            if (matchmedia) setActive(true);
          }}
          onMouseOut={() => {
            if (matchmedia) setActive(false);
          }}
          style={{
            height: active ? (matchmedia ? "21rem" : "11rem") : "3rem"
          }}
        >
          <div
            className="grid grid-rows-[repeat(3,min-content)] cursor-pointer duration-100 delay-500 min-h-[2rem] w-fit"
            style={{ gap: active ? "0.5rem" : "0.4rem" }}
            onClick={() => {
              setActive(!active);
            }}
          >
            <div className="w-7 h-1 ml-auto bg-green"></div>
            <div className="w-6 h-1 ml-auto bg-green"></div>
            <div className="w-5 h-1 ml-auto bg-green"></div>
          </div>
          <div className="p-0 m-0 flex flex-col gap-5">
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
                <NavItem content="Contact Me" location="/contact-me" />
              </>
            )}
          </div>
          <div className="w-fit text-[2rem]">
            <a href="https://www.linkedin.com/in/vietminhhieunguyen/">
              <LinkedinFilled className="text-white mx-1  duration-200  hover:text-green" />
            </a>
            <a href="mailto:vin028@ucsd.edu">
              <MailFilled className="text-white mx-1  duration-200  hover:text-green" />
            </a>
            <a href="https://github.com/Jaerinx">
              <GithubFilled className="text-white   mx-1  duration-200  hover:text-green" />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

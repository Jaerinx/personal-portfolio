import { Outlet, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);
  const location = useLocation();
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
      <div className="fixed cursor-default top-0 right-0 h-[10%] w-fit m-0 flex justify-end content-center p-[5rem] z-50 pr-[4rem] ">
        <div
          className="flex rounded-lg justify-end gap-5 overflow-x-hidden duration-500 items-center h-fit"
          style={{
            width: active ? "25rem" : "4rem"
          }}
        >
          <div className="p-0 m-0 flex gap-5">
            <NavItem content="Home" location="/" />
            <NavItem content="About me" location="/content" />
            <NavItem content="Resume" location="/resume" />
          </div>

          <div
            className="grid grid-row-3 cursor-pointer duration-100 delay-500 h-fit w-fit mr-4"
            onClick={() => {
              setActive(!active);
            }}
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

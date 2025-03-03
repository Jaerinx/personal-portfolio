import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="fixed top-0 right-0 h-[10%] w-fit m-0 flex justify-end content-center p-[3.5vw] z-50 pr-[4vw] ">
        <div
          className="flex bg-[#04001c] border-x-2 rounded-lg justify-end gap-5  border-x-white overflow-x-hidden duration-500 items-center"
          style={{
            width: active ? "35rem" : "5.5rem",
            height: active ? "6rem" : "5rem"
          }}
        >
          <div className="p-0 m-0 flex gap-5">
            <NavItem content="Home" location="/" />
            <NavItem content="About me" location="/content" />
            <NavItem content="Resume" location="/resume" />
          </div>

          <div
            className="grid grid-row-3 cursor-pointer duration-100 delay-500 h-fit w-fit mr-5"
            onClick={() => {
              setActive(!active);
            }}
            style={{ gap: active ? "0.75rem" : "0.5rem" }}
          >
            <div className="w-12 h-1 bg-green"></div>
            <div className="w-12 h-1 bg-green"></div>
            <div className="w-12 h-1 bg-green"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

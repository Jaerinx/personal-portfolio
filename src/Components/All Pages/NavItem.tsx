import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavItem({
  content,
  location
}: {
  content: string;
  location: string;
}) {
  const url = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (url.pathname === location) setActive(true);
      else setActive(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return (
    <div className="w-max ml-auto">
      <NavLink
        to={location}
        className=" border-2 border-dark_green rounded-lg px-1  hover:border-white text-4xl duration-100 hover:scale-0"
        style={{
          color: active ? "rgb(65 255 0 / var(--tw-text-opacity, 1))" : "white",
          opacity: active ? 0.5 : 0.8
        }}
        onClick={(e) => {
          if (active) e.preventDefault();
        }}
      >
        {content}
      </NavLink>
    </div>
  );
}

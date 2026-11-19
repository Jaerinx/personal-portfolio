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
    const id = setTimeout(() => {
      setActive(url.pathname === location);
    }, 1000);
    return () => clearTimeout(id);
  }, [url.pathname, location]);

  return (
    // Fixed slot height so hover scale never shifts neighbors
    <div className="ml-auto flex h-11 w-max items-center">
      <NavLink
        to={location}
        aria-current={active ? "page" : undefined}
        className="rounded-lg border-2 border-dark_green bg-[#04001c] px-1 text-2xl duration-100 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue"
        style={{
          color: active ? "#82A05c" : "white",
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

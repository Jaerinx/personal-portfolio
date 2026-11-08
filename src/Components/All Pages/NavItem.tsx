import { NavLink, useLocation } from "react-router-dom";

export default function NavItem({
  content,
  location
}: {
  content: string;
  location: string;
}) {
  const url = useLocation();
  const active = url.pathname === location;

  return (
    <div className="ml-auto w-max">
      <NavLink
        to={location}
        aria-current={active ? "page" : undefined}
        className={`flex min-h-11 items-center border border-green px-4 text-lg transition-colors duration-150 hover:bg-green hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue active:translate-y-px md:text-xl ${
          active ? "bg-green text-blue" : "bg-blue text-green"
        }`}
        style={{ fontFamily: "DOS" }}
        onClick={(e) => {
          if (active) e.preventDefault();
        }}
      >
        {content}
      </NavLink>
    </div>
  );
}

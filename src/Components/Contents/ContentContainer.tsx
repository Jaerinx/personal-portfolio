import { Children, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

const shell =
  "my-8 grid w-full grid-rows-[max-content_max-content] border border-green bg-blue text-[1.05rem] text-pretty md:text-paragraph";
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue";

export default function ContentContainer({
  children,
  width = "50%",
  left_margin,
  right_margin,
  title = "",
  link,
  to
}: {
  children?: ReactNode;
  width?: string;
  left_margin?: string;
  right_margin?: string;
  title?: string;
  link?: string;
  to?: string;
}) {
  const matches = useMediaQuery("(min-width: 1024px)");
  const style = {
    width: matches ? width : "100%",
    marginRight: right_margin,
    marginLeft: matches ? left_margin : undefined
  };
  const inner = (
    <>
      <div
        className={`mx-auto w-full border-b border-green ${
          matches && left_margin ? "text-right" : "text-left"
        }`}
      >
        <div className="m-2 p-2">
          <h3 className="h-fit break-words text-pretty font-['DOS'] text-[clamp(1rem,2.6vw,1.7rem)] leading-snug text-green">
            {title}
          </h3>
        </div>
      </div>
      {Children.count(children) > 0 ? (
        <div className="p-4">{children}</div>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${shell} ${focusRing}`} style={style}>
        {inner}
      </Link>
    );
  }
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`${shell} ${focusRing}`}
        style={style}
      >
        {inner}
      </a>
    );
  }
  return (
    <article className={shell} style={style}>
      {inner}
    </article>
  );
}

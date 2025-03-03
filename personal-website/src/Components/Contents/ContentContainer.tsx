import { ReactNode } from "react";
// import { useNavigate } from "react-router-dom";

export default function ContentContainer({
  children,
  width = "50%",
  left_margin,
  right_margin,
  title = "",
  link
}: {
  children?: ReactNode;
  width?: string;
  left_margin?: string;
  right_margin?: string;
  title?: string;
  link?: string;
}) {
  return (
    <div
      className="grid grid-rows-[1fr_auto] border-2 border-white rounded-lg m-5 text-[1.5vw] hover:scale-[0.99] duration-100"
      style={{
        width: width,
        marginRight: right_margin,
        marginLeft: left_margin,
        cursor: link ? "pointer" : ""
      }}
      onClick={() => {
        if (link) {
          window.location.href = link;
        }
      }}
    >
      <div className="border-b-2 border-white">
        <div className="p-2 m-2">
          <div className="text-white h-fit">{title}</div>
        </div>
      </div>
      <div className="m-5 text-white">
        {children?.toString === null ? <></> : children}
      </div>
    </div>
  );
}

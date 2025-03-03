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
      className={`grid grid-rows-[max-content_max-content] border-y-2 rounded-2xl border-[#000F2C] my-20 text-paragraph hover:scale-[0.99] duration-100 bg-[#000F2C] ${
        link ? ` cursor-pointer` : ""
      }`}
      style={{
        width: width,
        marginRight: right_margin,
        marginLeft: left_margin
      }}
      onClick={() => {
        if (link) {
          window.location.href = link;
        }
      }}
    >
      <div
        className={`border-b-2 border-white w-full mx-auto ${
          left_margin ? "text-right" : "text-left"
        }`}
      >
        <div className="p-2 m-2">
          <h1 className=" h-fit">{title}</h1>
        </div>
      </div>
      <div className="p-5  ">
        {children?.toString === null ? <></> : children}
      </div>
    </div>
  );
}

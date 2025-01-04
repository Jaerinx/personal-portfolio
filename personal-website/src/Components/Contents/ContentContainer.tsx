import { ReactNode } from "react";

export default function ContentContainer({
  children,
  width = "50%",
  left_margin,
  right_margin,
  title = ""
}: {
  children?: ReactNode;
  width?: string;
  left_margin?: string;
  right_margin?: string;
  title?: string;
}) {
  return (
    <div
      className="grid grid-rows-[min-content_min-content] border-2 border-white rounded-lg m-5 text-[1.3vw]"
      style={{
        width: width,
        marginRight: right_margin,
        marginLeft: left_margin
      }}
    >
      <div className="border-b-2 border-white">
        <div className="p-2 m-2">
          <div className="text-white h-fit">{title}</div>
        </div>
      </div>
      <div className="m-5">
        {children?.toString === null ? <></> : children}
      </div>
    </div>
  );
}

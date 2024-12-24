import { ReactNode } from "react";

export default function ContentContainer({
  children,
  width = "50%",
}: {
  children: ReactNode;
  width?: string;
}) {
  return (
    <div
      className={`grid grid-rows-[min-content_min-content] border-2 border-white rounded-lg m-5 w-[${width}]`}
    >
      <div className="border-b-2 border-white">
        <div className="p-2 h-[2vw]">
          <div className=""></div>
        </div>
      </div>
      <div className="m-5">{children}</div>
    </div>
  );
}

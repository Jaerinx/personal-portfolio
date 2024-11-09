import { useRef, useEffect, useState } from "react";
export default function Dot({
  i,
  mouse_x,
  mouse_y
}: {
  i: number;
  mouse_x: number;
  mouse_y: number;
}) {
  const [distance, setDistance] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const rect = componentRef.current.getBoundingClientRect();
      setDistance(
        Math.floor(((mouse_x - rect.x) ** 2 + (mouse_y - rect.y) ** 2) ** 0.5)
      );
      console.log(distance);
    }
  });

  return (
    <div
      ref={componentRef}
      key={i}
      className={`text-center aspect-square opacity-[0.05] rounded-full w-10 duration-500 ${
        distance < 200 || (distance > 1000 && distance < 1200)
          ? "bg-white border-2"
          : ""
      }`}
    ></div>
  );
}

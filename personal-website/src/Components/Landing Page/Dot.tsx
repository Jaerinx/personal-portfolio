import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const dotsMotion = {
  initial: {
    opacity: 0,
    y: 200
  },
  animate: {
    opacity: 0.5,
    y: 0,
    transition: {
      duration: 0.1,
      type: "spring"
    }
  }
};

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
      const rect = componentRef.current.getBoundingClientRect();
      setDistance(
        Math.floor(((mouse_x - rect.x) ** 2 + (mouse_y - rect.y) ** 2) ** 0.5)
      );
      console.log(distance);
    }
  }, [mouse_x, mouse_y, distance]);

  return (
    <motion.div
      ref={componentRef}
      key={i}
      variants={dotsMotion}
      className={`text-center aspect-square opacity-[0.05] rounded-full w-10 duration-200 z-[-1]  ${
        distance > 300 && distance < 500 ? "bg-[#41ff00]" : ""
      }`}
    ></motion.div>
  );
}

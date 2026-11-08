import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    let next = { x: 0, y: 0 };

    const update = (x: number, y: number) => {
      next = { x, y };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setMousePosition(next);
        frame = 0;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      update(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;

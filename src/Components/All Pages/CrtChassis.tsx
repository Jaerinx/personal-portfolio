import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function CrtChassis() {
  const glassRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const pointerUsed = useRef(false);
  const idle = useRef(0);

  useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;

    const setSpot = (x: number, y: number) => {
      glass.style.setProperty("--gx", `${x}%`);
      glass.style.setProperty("--gy", `${y}%`);
    };

    const onMove = (event: PointerEvent) => {
      pointerUsed.current = true;
      setSpot(
        (event.clientX / window.innerWidth) * 100,
        (event.clientY / window.innerHeight) * 100
      );
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    if (reduceMotion) {
      setSpot(62, 28);
      return () => window.removeEventListener("pointermove", onMove);
    }

    let frame = 0;
    const loop = () => {
      if (!pointerUsed.current) {
        idle.current += 0.008;
        setSpot(
          62 + 10 * Math.cos(idle.current),
          28 + 8 * Math.sin(idle.current * 0.85)
        );
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const sweep = sweepRef.current;
    if (!sweep || reduceMotion) return;
    const hide = () => {
      sweep.style.opacity = "0";
    };
    sweep.addEventListener("animationend", hide, { once: true });
    return () => sweep.removeEventListener("animationend", hide);
  }, [reduceMotion]);

  return (
    <>
      <div className="crt-glass-layer" aria-hidden="true">
        <div className="crt-well crt-well-top" />
        <div ref={glassRef} className="crt-glass" />
        {!reduceMotion && <div ref={sweepRef} className="crt-sweep" />}
      </div>

      {/* Original CRT chrome geometry — chin via border-bottom, lip inset */}
      <div className="crt-stage" aria-hidden="true">
        <div className="crt-bezel-outer" />
        <div className="crt-bezel-lip" />
      </div>
    </>
  );
}

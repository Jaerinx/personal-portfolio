import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function CrtChassis() {
  const glassRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;
    // Static CRT glare — no cursor follow
    glass.style.setProperty("--gx", "62%");
    glass.style.setProperty("--gy", "28%");
  }, []);

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

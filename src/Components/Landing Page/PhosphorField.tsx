import { useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import useWindowDimensions from "../../Hooks/WindowDimension";

export default function PhosphorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, used: false });
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY, used: true };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = width < 640 ? 10 : width < 1024 ? 14 : 16;
    const rows = height < 700 ? 12 : 14;
    const volume = width >= 1024;
    let frame = 0;
    let t = 0;

    const paint = (animate: boolean) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const nextW = Math.floor(rect.width * dpr);
      const nextH = Math.floor(rect.height * dpr);
      if (canvas.width !== nextW || canvas.height !== nextH) {
        canvas.width = nextW;
        canvas.height = nextH;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (!pointerRef.current.used) {
        if (animate) t += 0.01;
        const desktop = width >= 1024;
        pointerRef.current.x =
          width *
          ((desktop ? 0.82 : 0.72) + (animate ? 0.05 * Math.cos(t) : 0));
        pointerRef.current.y =
          height *
          ((desktop ? 0.42 : 0.58) +
            (animate ? 0.06 * Math.sin(t * 0.85) : 0));
      }

      const cellW = rect.width / cols;
      const cellH = rect.height / rows;
      const size = width >= 1024 ? 12 : width >= 640 ? 9 : 7;
      const radius = Math.min(width, height);
      const outer = radius * (volume ? 0.28 : 0.22);
      const cx = pointerRef.current.x;
      const cy = pointerRef.current.y;
      const focal = Math.max(rect.width, rect.height) * 1.05;
      const bulge = volume ? focal * 0.28 : 0;
      const camX = volume ? ((cx / width) - 0.5) * 28 : 0;
      const camY = volume ? ((cy / height) - 0.5) * 18 : 0;
      const midX = rect.width / 2;
      const midY = rect.height / 2;

      for (let i = 0; i < cols * rows; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * cellW + cellW / 2;
        const y = row * cellH + cellH / 2;
        let sx = x;
        let sy = y;
        let dot = size;

        if (volume) {
          const nx = cols === 1 ? 0 : (col / (cols - 1)) * 2 - 1;
          const ny = rows === 1 ? 0 : (row / (rows - 1)) * 2 - 1;
          const z = bulge * (1 - (nx * nx + ny * ny) * 0.82);
          const scale = focal / (focal + (bulge - z));
          sx = (x - midX - camX) * scale + midX;
          sy = (y - midY - camY) * scale + midY;
          dot = size * scale;
        }

        const dist = Math.hypot(cx - (rect.left + x), cy - (rect.top + y));
        const lit = dist < outer;
        ctx.fillStyle = lit ? "rgba(130,192,92,1)" : "rgba(130,192,92,0.18)";
        ctx.fillRect(sx - dot / 2, sy - dot / 2, dot, dot);
      }
    };

    if (reduceMotion) {
      paint(false);
      return;
    }

    const loop = () => {
      paint(true);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [width, height, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={
        width >= 1024
          ? {
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, transparent 48%, black 78%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, transparent 48%, black 78%)"
            }
          : width >= 768
            ? {
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, transparent 35%, black 70%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, transparent 35%, black 70%)"
              }
            : {
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 55% at 70% 70%, black 0%, transparent 72%)",
                maskImage:
                  "radial-gradient(ellipse 70% 55% at 70% 70%, black 0%, transparent 72%)"
              }
      }
      aria-hidden="true"
    />
  );
}

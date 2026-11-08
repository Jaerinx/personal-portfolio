import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

const dos = { fontFamily: "DOS" } as const;

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return { ref, reduceMotion, show: reduceMotion || inView };
}

export function CountUp({
  value,
  suffix = "",
  label
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="min-w-0">
      <p className="tabular-nums text-xl leading-6 text-green md:text-2xl" style={dos}>
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="text-[11px] leading-4 text-green/70" style={dos}>
        {label}
      </p>
    </div>
  );
}

export function TinyMulti({
  cells,
  ariaLabel
}: {
  cells: { value: number; suffix?: string; label: string }[];
  ariaLabel: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="mt-2 grid grid-cols-2 gap-4 border border-green/40 bg-blue px-4 py-2"
      style={dos}
    >
      {cells.map((cell) => (
        <CountUp
          key={cell.label}
          value={cell.value}
          suffix={cell.suffix}
          label={cell.label}
        />
      ))}
    </div>
  );
}

export function BeforeAfterBar({
  baseline,
  result,
  labels,
  context,
  ariaLabel
}: {
  baseline: number;
  result: number;
  labels: [string, string];
  context: string;
  ariaLabel: string;
}) {
  const { ref, reduceMotion } = useReveal();
  const max = Math.max(1, result, baseline);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className="mt-2 space-y-2 border border-green/40 bg-blue px-4 py-2"
      style={dos}
    >
      <p className="text-[11px] leading-4 text-green/70">{context}</p>
      {(
        [
          [labels[0], baseline, false],
          [labels[1], result, true]
        ] as const
      ).map(([label, value, lit]) => (
        <div key={label} className="grid grid-cols-[5.5rem_1fr_2.5rem] items-center gap-2">
          <span className="truncate text-[11px] text-green/80">{label}</span>
          <div className="h-2 overflow-hidden bg-green/15">
            <motion.div
              className={`h-full origin-left ${lit ? "bg-green" : "bg-green/45"}`}
              initial={false}
              animate={{ scaleX: value / max }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.7, ease: "easeOut" }
              }
            />
          </div>
          <span className="text-right text-[11px] tabular-nums text-green">
            {value.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}

export function SplitMeter({
  fill,
  legend,
  ariaLabel
}: {
  fill: number;
  legend: string;
  ariaLabel: string;
}) {
  const { ref, reduceMotion } = useReveal();

  return (
    <div
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className="mt-2 border border-green/40 bg-blue px-4 py-2"
      style={dos}
    >
      <div className="relative h-2 bg-green/15">
        <motion.div
          className="h-full origin-left bg-green"
          initial={false}
          animate={{ scaleX: fill }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }
          }
        />
        <div className="absolute inset-y-0 left-1/2 w-px bg-green" />
      </div>
      <p className="mt-2 text-[11px] leading-4 text-green">{legend}</p>
    </div>
  );
}

export function DecisionTrace({
  steps,
  current,
  ariaLabel
}: {
  steps: string[];
  current?: number;
  ariaLabel: string;
}) {
  const { ref, reduceMotion, show } = useReveal<HTMLOListElement>();
  const lit = current ?? steps.length - 1;

  return (
    <ol
      ref={ref}
      aria-label={ariaLabel}
      className="mt-2 space-y-1 border border-green/40 bg-blue px-4 py-2 text-sm"
      style={dos}
    >
      {steps.map((step, index) => (
        <motion.li
          key={step}
          className={index === lit ? "text-green" : "text-green/70"}
          initial={false}
          animate={{ opacity: show ? 1 : 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.4, delay: index * 0.12, ease: "easeOut" }
          }
        >
          {index === lit ? "> " : "  "}
          {step}
        </motion.li>
      ))}
    </ol>
  );
}

export function CaptionedShot({
  src,
  alt,
  caption,
  width,
  height,
  className = "",
  imgClassName = "",
  extra
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  extra?: ReactNode;
}) {
  const { ref, reduceMotion, show } = useReveal();

  return (
    <figure ref={ref} className={`min-w-0 ${className}`}>
      <motion.div
        className="relative overflow-hidden border border-green bg-blue p-2"
        initial={false}
        animate={{ opacity: show ? 1 : 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-auto w-full object-cover object-top ${imgClassName}`}
        />
        {extra}
      </motion.div>
      <figcaption
        className="mt-2 text-[11px] leading-4 tracking-[0.08em] text-green"
        style={dos}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

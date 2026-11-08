export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="my-8 flex w-full flex-col items-center md:my-12">
      <div className="h-1 w-full bg-green/30" />
      <h2 className="m-2 cursor-text text-center font-['DOS'] text-[clamp(1.2rem,3vw,1.7rem)] text-green">
        {title}
      </h2>
      <div className="h-1 w-full bg-green/30" />
    </div>
  );
}

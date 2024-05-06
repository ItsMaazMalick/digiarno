import { cn } from "@/lib/utils";

export function TitleText({
  title,
  desc,
  className,
}: {
  title: string;
  desc?: string;
  className?: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center">
      <span className="mt-8 text-center tracking-[10px] font-bold text-primary text-2xl">
        *****
      </span>
      <h3 className={cn("text-center text-3xl  text-primary", className)}>
        {title}
      </h3>
      <p className="text-center my-2">{desc}</p>
    </div>
  );
}

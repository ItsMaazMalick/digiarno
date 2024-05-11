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
      <h3
        className={cn(
          "mt-8 text-center text-3xl  text-primary font-bold",
          className
        )}
      >
        {title}
      </h3>
      <p className="text-center my-2">{desc}</p>
    </div>
  );
}

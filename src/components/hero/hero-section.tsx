import Image from "next/image";
import { Button } from "../ui/button";
import { companyTagline, companyTitle } from "@/constants/company";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroSectionData = {
  data: {
    image: string;
    title: string;
    description?: string;
    buttons?: {
      title: string;
      href: string;
    }[];
  };
  className?: string;
};

export function HeroSection({ data, className }: HeroSectionData) {
  return (
    <>
      <div className="absolute -z-50  left-0 w-full h-[calc(100dvh-70px)]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover brightness-[40%]"
        />
      </div>
      <div className="mx-auto h-[calc(100dvh-70px)] text-white flex justify-center items-center flex-col gap-6">
        <h2
          className={cn(
            "text-2xl md:text-4xl lg:text-6xl font-bold max-w-[600px] text-center uppercase",
            className
          )}
        >
          {data.title}
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400">
          {data.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {data.buttons?.map(
            (button: { title: string; href: string }, index: number) => (
              <Link key={index} href={button.href}>
                <Button className="rounded-full">{button.title}</Button>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}

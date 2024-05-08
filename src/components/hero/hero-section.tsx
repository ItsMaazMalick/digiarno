import Image from "next/image";
import { Button } from "../ui/button";
import { companyTagline, companyTitle } from "@/constants/company";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <div className="absolute -z-50  left-0 w-full h-[calc(100dvh-75px)]">
        <Image
          src="/images/motion-graphics.gif"
          alt={companyTitle}
          fill
          className="object-cover brightness-[40%]"
        />
      </div>
      <div className="mx-auto h-[calc(100dvh-75px)] text-white flex justify-center items-center flex-col gap-6">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold max-w-[600px] text-center">
          {companyTagline}
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400">
          Solution Provider
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href={"/services"}>
            <Button className="text-black rounded-full" variant={"outline"}>
              View Services
            </Button>
          </Link>
          <Link href={"/portfolio"}>
            <Button className="rounded-full">View Portfolio</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

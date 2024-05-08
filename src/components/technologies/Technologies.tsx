import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { technologies } from "@/constants/technologies";

export function Technologies() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border p-4">
      <div className="flex w-max space-x-4">
        {technologies.map(
          (tech: { title: string; image: string }, index: number) => (
            <figure key={index} className="shrink-0">
              <div className="overflow-hidden rounded-md border">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  className="aspect-square h-fit w-fit object-contain"
                  width={70}
                  height={70}
                />
              </div>
              <figcaption className="pt-1 text-xs text-muted-foreground text-center font-semibold">
                {tech.title}
              </figcaption>
            </figure>
          )
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

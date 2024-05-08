import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Meteors } from "../ui/meteors";

export function ServiceCard({
  title,
  image,
  desc,
  className,
}: {
  title: string;
  image: string;
  desc: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <CardContainer className="inter-var">
        <CardBody className="bg-primary/10 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  overflow-hidden ring-[1px]">
          <CardItem translateZ="100" className="w-[80px] mb-4 mx-auto">
            <Image
              src={image}
              height="500"
              width="500"
              className="h-[80px] w-[80px] object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold flex justify-center w-full"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 text-center"
          >
            {desc}
          </CardItem>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </CardBody>
      </CardContainer>
    </div>
  );
}

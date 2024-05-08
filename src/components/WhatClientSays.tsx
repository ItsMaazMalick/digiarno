import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { clientSays } from "@/constants/clientSays";
import { AnimatedCard } from "./cards/animated-card";

export function WhatClientSays() {
  return (
    <Carousel className="w-[calc(100dvw-20px)] lg:w-[calc(100vw-200px)] lg:p-10 pt-4">
      <CarouselContent>
        {clientSays.map(
          (
            client: {
              image: string;
              name: string;
              position: string;
              desc: string;
            },
            index: number
          ) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <AnimatedCard option={2}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col md:flex-row items-center justify-center p-6 gap-2">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={100}
                        height={100}
                        className="object-contain rounded-full border"
                      />
                      <div>
                        <p className="text-center md:text-start text-xl font-bold text-primary">
                          {client.name}
                        </p>
                        <p className="text-center md:text-start font-semibold">
                          {client.position}
                        </p>
                        <p className="text-center md:text-start font-light">
                          {client.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedCard>
            </CarouselItem>
          )
        )}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

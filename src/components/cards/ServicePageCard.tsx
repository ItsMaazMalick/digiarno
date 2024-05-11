"use client";

import Image from "next/image";

export function ServicePageCard({ service }: any) {
  return (
    <div
      className={`w-full px-2 py-12 lg:px-32 ${service.bgColor} text-white flex flex-col lg:flex-row justify-center items-center gap-4`}
    >
      <div className="flex-1">
        <Image
          src={service.image}
          alt={service.title}
          width="500"
          height="500"
          className="w-full object-contain h-[300px] rounded-lg shadow-lg shadow-white"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="font-bold text-3xl">{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </div>
  );
}

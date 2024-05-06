import { services } from "@/constants/services";
import { ServiceCard } from "./cards/ServiceCard";

export function Services() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 px-2 lg:px-12">
      {services.map(
        (
          service: { title: string; image: string; desc: string },
          index: number
        ) => (
          <ServiceCard
            className="w-full md:w-[45%] lg:w-[32%]"
            key={index}
            title={service.title}
            image={service.image}
            desc={service.desc}
          />
        )
      )}
    </div>
  );
}

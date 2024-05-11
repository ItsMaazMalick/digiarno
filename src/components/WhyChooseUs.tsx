import { services } from "@/constants/services";
import { ServiceCard } from "./cards/ServiceCard";
import { whyChooseUs } from "@/constants/why-choose-us";

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-12">
      {whyChooseUs.map(
        (
          service: { title: string; image: string; desc: string },
          index: number
        ) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            desc={service.desc.slice(0, 280)}
          />
        )
      )}
    </div>
  );
}

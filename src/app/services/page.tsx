import { ServicePageCard } from "@/components/cards/ServicePageCard";
import { AnimatedCard } from "@/components/cards/animated-card";
import { HeroSection } from "@/components/hero/hero-section";
import { TitleText } from "@/components/title/TitleText";
import { companyTitle } from "@/constants/company";
import { services } from "@/constants/services";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4">
      <HeroSection index={2} />
      <TitleText
        title="CHOOSE YOUR DESIRED SERVICE"
        desc="And Let Us Worry About The Rest!"
      />
      <div className="">
        {services.map(
          (
            service: {
              title: string;
              image: string;
              desc: string;
              bgColor: string;
            },
            index: number
          ) => (
            <AnimatedCard key={index} option={4}>
              <ServicePageCard key={index} service={service} />
            </AnimatedCard>
          )
        )}
      </div>
    </div>
  );
}

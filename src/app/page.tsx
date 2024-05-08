import { Technologies } from "@/components/technologies/Technologies";
import { TitleText } from "@/components/title/TitleText";
import { technologies } from "@/constants/technologies";
import Image from "next/image";
import { services } from "@/constants/services";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhatClientSays } from "@/components/WhatClientSays";
import { staff } from "@/constants/team";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TeamCard } from "@/components/cards/TeamCard";
import { TeamSection } from "@/components/TeamSection";
import { HeroSection } from "@/components/hero/hero-section";
import { AnimatedCard } from "@/components/cards/animated-card";

export default function Home() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4 px-2 lg:px-20">
      <HeroSection />

      {/* <div className="mx-auto mt-10">
        <Technologies />
      </div> */}
      <AnimatedCard option={4}>
        <TitleText
          title="Discover Courses Across Departments"
          desc="Your ideas, our expertise, your success."
        />
      </AnimatedCard>
      <Services />
      <AnimatedCard option={4}>
        <TitleText
          title="Why choose us?"
          desc="Here are some of the reasons why you should choose Digiarno for your software Development Services."
        />
      </AnimatedCard>
      <p className="px-2 lg:px-12 mb-8">
        Digiarno has a team of skilled and experienced software engineers who
        can handle any kind of project, from simple websites to complex
        applications. They have expertise in web, mobile, cloud, artificial
        intelligence, blockchain, and more technologies. They can also work with
        different languages, frameworks, and tools to suit your needs and
        preferences.
      </p>
      <WhyChooseUs />
      <AnimatedCard option={4}>
        <TitleText title="WHAT CLIENTS SAY" />
      </AnimatedCard>
      <div className="mx-auto p-2">
        <WhatClientSays />
      </div>
      <TeamSection title="Team" team={staff.slice(0, 4)} />
    </div>
  );
}

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
import NumberTicker from "@/components/ui/number-ticker";
import { numberOfClientAndOthers } from "@/constants/data";
import { ClientsCounter } from "@/components/ClientsCounter";
import { Metadata } from "next";
import { companyDescription, companyTitle } from "@/constants/company";

const homeHeroData = {
  image: "/images/hero/home.gif",
  title: "WORLD'S FINEST TECHNOLOGY HUB",
  description: "Solution Provider",
  buttons: [
    { title: "View Services", href: "/services" },
    { title: "Contact Us", href: "/contact-us" },
  ],
};

export const metadata: Metadata = {
  title: `Home | ${companyTitle}`,
  description: companyDescription,
};

export default function Home() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4 px-2 lg:px-20">
      <HeroSection data={homeHeroData} />

      {/* <div className="mx-auto mt-10">
        <Technologies />
      </div> */}
      <TitleText
        title="Discover Courses Across Departments"
        desc="Your ideas, our expertise, your success."
      />
      <Services />
      <TitleText
        title="Why choose us?"
        desc="Here are some of the reasons why you should choose Digiarno for your software Development Services."
      />
      <p className="px-2 lg:px-12 mb-8 text-center">
        Digiarno has a team of skilled and experienced software engineers who
        can handle any kind of project, from simple websites to complex
        applications. They have expertise in web, mobile, cloud, artificial
        intelligence, blockchain, and more technologies. They can also work with
        different languages, frameworks, and tools to suit your needs and
        preferences.
      </p>
      <WhyChooseUs />
      <ClientsCounter />
      <TitleText title="WHAT CLIENTS SAY" />
      <div className="mx-auto p-2">
        <WhatClientSays />
      </div>
      <TeamSection title="Team" team={staff.slice(0, 4)} />
    </div>
  );
}

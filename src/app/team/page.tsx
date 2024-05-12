import Image from "next/image";
import { TeamSection } from "@/components/TeamSection";
import {
  digitalMarketers,
  flutterDeveloper,
  graphicDesigner,
  staff,
  webDeveloper,
} from "@/constants/team";
import { TitleText } from "@/components/title/TitleText";
import { HeroSection } from "@/components/hero/hero-section";

const teamHeroData = {
  image: "/images/hero/hero-bg-4.jpg",
  title: "team",
  description: "",
  buttons: [],
};

export default function Team() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4">
      <HeroSection data={teamHeroData} />
      <TitleText
        title="Meet Our Team"
        desc="Digiarno is well known Pakistani company. Digiarno was established in 2021, our aim is to resolve your problems with the latest technology and enhance your business lifestyle."
      />
      {/* <div className="flex flex-col md:flex-row justify-center items-center gap-2 p-20 bg-primary/10">
        <div className="relative flex-1 flex justify-center items-center">
          <Image
            src={"/images/team/ceo.png"}
            alt=""
            width="300"
            height="300"
            className="object-contain rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="flex-1 text-center md:text-start">
          <h4 className="text-4xl font-bold text-primary">M. Noman Abbasi</h4>
          <p className="font-semibold text-xl">CEO</p>
        </div>
      </div> */}
      {/* STAFF */}
      <TeamSection title="Meet Our Staff" team={staff.slice(0, 4)} />
      <TeamSection title="Meet Our Graphic Designer" team={graphicDesigner} />
      <TeamSection title="Meet Our Web Developer" team={webDeveloper} />
      <TeamSection title="Meet Our Flutter Developer" team={flutterDeveloper} />
      <TeamSection title="Meet Our Digital Marketers" team={digitalMarketers} />
    </div>
  );
}

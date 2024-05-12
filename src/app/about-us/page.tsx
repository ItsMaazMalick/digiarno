import { HeroSection } from "@/components/hero/hero-section";
import { TitleText } from "@/components/title/TitleText";
import { aboutUsData } from "@/constants/about-us";

const aboutHeroData = {
  image: "/images/hero/hero-bg-5.jpg",
  title: "About Us",
  description: "",
  buttons: [],
};

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4">
      <HeroSection data={aboutHeroData} />
      <TitleText title="About Us" />
      <div className="px-2 lg:px-32">
        {aboutUsData.map(
          (data: { title: string; desc: string }, index: number) => (
            <div key={index}>
              <h3 className="text-xl font-bold my-2 uppercase">{data.title}</h3>
              <p className="mb-4">{data.desc}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TitleText } from "@/components/title/TitleText";
import { ContactUs } from "@/components/forms/contact-us-form";
import { HeroSection } from "@/components/hero/hero-section";
import { Metadata } from "next";
import { companyDescription, companyTitle } from "@/constants/company";

const contactHeroData = {
  image: "/images/hero/hero-bg-3.jpg",
  title: "Contact Us",
  description: "",
  buttons: [],
};

export const metadata: Metadata = {
  title: `Contact Us | ${companyTitle}`,
  description: companyDescription,
};

export default function Component() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4">
      <HeroSection data={contactHeroData} />
      <TitleText
        title="Contact Us"
        desc="Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible."
      />
      <ContactUs />
    </div>
  );
}

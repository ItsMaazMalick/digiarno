import {
  companyAddress,
  companyDescription,
  companyNumber,
  companyTitle,
} from "@/constants/company";
import { navlinks } from "@/constants/navlinks";
import { services } from "@/constants/services";
import { socialLinks } from "@/constants/social";
import Image from "next/image";
import Link from "next/link";
import { NewsLetterForm } from "../forms/news-letter-form";

export function Footer() {
  return (
    <>
      <div className="mt-8 bg-primary/10 w-full flex flex-col lg:flex-row justify-between items-start gap-4 py-10 px-4">
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-2">
          <h3 className="uppercase text-3xl font-bold text-primary">
            {companyTitle}
          </h3>
          <p>{companyDescription}</p>
          <p>{companyNumber}</p>
          <p>{companyAddress}</p>
        </div>
        <div className="flex-1 text-center w-full lg:text-start">
          <h3 className="text-lg font-bold mb-3">Services</h3>
          <div>
            {services
              .slice(0, 9)
              .map((service: { title: string }, index: number) => (
                <p className="font-light" key={index}>
                  {service.title}
                </p>
              ))}
          </div>
        </div>
        <div className="flex-1 text-center w-full lg:text-start">
          <h3 className="text-lg font-bold mb-3">Company</h3>
          <div className="flex flex-col font-light">
            {navlinks.map(
              (link: { title: string; href: string }, index: number) => (
                <Link key={index} href={link.href} className="w-fit">
                  {link.title}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex-1 text-center w-full lg:text-start">
          <h3 className="text-lg font-bold my-3">Newsletter</h3>
          <NewsLetterForm />
          <h3 className="text-lg font-bold my-3">Social</h3>
          <div className="flex  items-center">
            {socialLinks.map(
              (link: { image: string; href: string }, index: number) => (
                <Link key={index} href={link.href} className="mx-auto lg:mx-0">
                  <Image
                    src={link.image}
                    alt={link.image}
                    width="50"
                    height="50"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
}

function CopyRight() {
  return (
    <div className="w-screen flex justify-center items-center p-4 bg-primary text-primary-foreground font-light">
      &copy; 2021 {companyTitle}. All Rights Reserved
    </div>
  );
}

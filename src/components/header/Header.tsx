"use client";
import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { companyMail, companyTitle } from "@/constants/company";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <TopHeader /> */}
      <div
        className={`sticky top-0 z-50 ${
          scrolled ? "bg-white shadow-md" : "bg-black"
        }  w-screen flex justify-between py-1 px-4 lg:px-32 h-[70px]`}
      >
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src={"/logo.png"} alt="DigiArno Logo" width={50} height={50} /> */}
          <h1
            className={`text-2xl font-semibold tracking-widest uppercase ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {companyTitle}
          </h1>
        </Link>
        {/* LINKS */}
        <div className="hidden lg:flex gap-6 justify-center items-center font-bold">
          {navlinks.map(
            (link: { title: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className={` hover:text-primary  ${
                  pathname === link.href
                    ? "text-primary"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                }`}
              >
                {link.title}
              </Link>
            )
          )}
        </div>
        <div className="flex lg:hidden items-center">
          <MobileMenu>
            <Menu className="text-primary" />
          </MobileMenu>
        </div>
      </div>
      {/* Hero */}
    </>
  );
}

function MobileMenu({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="py-0 px-1">{children}</MenubarTrigger>
        <MenubarContent className="mr-1">
          {navlinks.map(
            (link: { title: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className={` hover:text-primary  ${
                  pathname === link.href ? "text-primary" : "text-black"
                }`}
              >
                <MenubarItem>{link.title}</MenubarItem>
              </Link>
            )
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function TopHeader() {
  return (
    <div className="hidden w-screen lg:flex justify-between items-center py-1 md:px-32 text-sm bg-primary text-primary-foreground font-light h-[25px]">
      <p>Welcome to {companyTitle} Institude!</p>
      <p>{companyMail}</p>
    </div>
  );
}

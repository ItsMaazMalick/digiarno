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
import React from "react";
import { Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <TopHeader />
      <div className="bg-primary-foreground text-primary w-screen flex justify-between py-1 px-8 shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="DigiArno Logo" width={50} height={50} />
          <h1 className="text-2xl font-semibold tracking-widest">DIGIARNO</h1>
        </Link>
        {/* LINKS */}
        <div className="hidden lg:flex gap-4 justify-center items-center font-light">
          {navlinks.map(
            (link: { title: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className={`text-primary hover:font-normal ${
                  pathname === link.href ? "font-normal" : ""
                }`}
              >
                {link.title}
              </Link>
            )
          )}
        </div>
        <div className="flex lg:hidden items-center">
          <MobileMenu>
            <Menu />
          </MobileMenu>
        </div>
      </div>
    </>
  );
}

function MobileMenu({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{children}</MenubarTrigger>
        <MenubarContent className="mr-1">
          {navlinks.map(
            (link: { title: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className={`font-light text-primary hover:font-normal ${
                  pathname === link.href ? "font-normal" : ""
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
    <div className="hidden w-screen lg:flex justify-between items-center py-1 px-8 text-sm bg-primary text-primary-foreground font-light">
      <p>Welcome to DigiArno Institude!</p>
      <p>info@digianro.com</p>
    </div>
  );
}

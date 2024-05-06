import {
  companyAddress,
  companyNumber,
  companyTitle,
} from "@/constants/company";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 px-1 lg:px-12 bg-primary/10 p-2 mt-8">
        {/* CONTACT US */}
        <div className="font-light space-y-2 flex-1">
          <h4 className="font-bold text-xl mb-6">Contact Us</h4>
          <p>Call us 9am to 11pm</p>
          <p className="font-semibold">{companyNumber}</p>
          <p>{companyAddress}</p>
        </div>
        {/* ABOUT US */}
        <div className="font-light flex flex-col gap-1 flex-1">
          <h4 className="font-bold text-xl mb-6">{companyTitle}</h4>
          <Link href={"/contact-us"}>Contact Us</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/"}>Team</Link>
        </div>
      </div>
      <CopyRight />
    </>
  );
}

function CopyRight() {
  return (
    <div className="w-screen flex justify-center items-center p-4 bg-primary text-primary-foreground font-light">
      &copy; {new Date().getFullYear()} DigiArno. All Rights Reserved
    </div>
  );
}

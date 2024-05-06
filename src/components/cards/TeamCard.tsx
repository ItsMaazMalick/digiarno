import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function TeamCard({ team, className }: any) {
  return (
    <div className={cn("w-full relative overflow-hidden", className)}>
      <Image
        src={team.image}
        height="500"
        width="500"
        className="w-full aspect-square object-cover rounded-xl hover:scale-125 transition-all duration-300"
        alt=""
      />
      <div className="absolute bottom-0 bg-black text-white bg-opacity-70 text-center w-full rounded-md p-1">
        <h4 className="font-semibold text-xl">{team.name}</h4>
        <p className="font-light">{team.position}</p>
        <div className="flex justify-center items-center w-full gap-4 p-2">
          {team.social?.map(
            (social: { id: string; link: string }, index: number) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="hover:text-primary"
              >
                {social.id === "fb" && <FaFacebookF />}
                {social.id === "tw" && <FaTwitter />}
                {social.id === "in" && <FaLinkedinIn />}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

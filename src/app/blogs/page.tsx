import { HeroSection } from "@/components/hero/hero-section";
import { TitleText } from "@/components/title/TitleText";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { blogs } from "@/constants/blogs";
import { companyDescription, companyTitle } from "@/constants/company";
import { convertStringToWordArray } from "@/helpers/convertTextToWordsArray";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const blogsHeroData = {
  image: "/images/hero/blogs.jpg",
  title: "Blogs",
  description: "",
  buttons: [],
};

export const metadata: Metadata = {
  title: `Blogs | ${companyTitle}`,
  description: companyDescription,
};

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-grow mb-4">
      <HeroSection data={blogsHeroData} />
      <TitleText title="Latest Blogs" />
      <div className="px-2 lg:px-32">
        {/* CONTAINER */}
        {blogs.map(
          (blog: {
            id: number;
            title: string;
            image: string;
            user: string;
            date: string;
            desc: string;
          }) => (
            <div
              key={blog.id}
              className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 my-4"
            >
              <div className="w-full lg:w-[40%] overflow-hidden">
                <Link href={`/blogs/${blog.id}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width="1000"
                    height="1000"
                    className="w-full h-[300px] object-contain  shadow-md hover:scale-125 ease-in-out duration-300"
                  />
                </Link>
              </div>
              <div className="w-full lg:w-[60%] space-y-2">
                <Link href={`/blogs/${blog.id}`}>
                  <h4 className="text-2xl font-bold hover:text-primary">
                    {blog.title.length > 80
                      ? `${blog.title.slice(0, 80)}...`
                      : blog.title}
                  </h4>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <p className="text-black font-bold hover:text-primary">
                    {blog.user}
                  </p>
                  <p>{blog.date}</p>
                </div>
                <Link href={`/blogs/${blog.id}`}>
                  <p className="hover:text-primary">
                    {blog.desc.length > 400
                      ? `${blog.desc.slice(0, 400)}...`
                      : blog.desc}
                  </p>
                </Link>
                <Link href={`/blogs/${blog.id}`}>
                  <Button className="mt-2">Read More</Button>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

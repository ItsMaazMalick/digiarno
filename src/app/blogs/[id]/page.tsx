import { HeroSection } from "@/components/hero/hero-section";
import { TitleText } from "@/components/title/TitleText";
import { blogs } from "@/constants/blogs";
import { ResolvingMetadata } from "next";
import Image from "next/image";

const notFoundData = {
  image: "/images/hero/home.gif",
  title: "Blog Not Found",
  description: "",
  buttons: [],
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;

  const blog = blogs.find((b) => String(b.id) === id);

  return {
    title: blog?.title,
    description: blog?.desc,
    keywords: blog?.keywords,
  };
}

export default function page({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => String(b.id) === params.id);
  if (!blog) {
    return (
      <div className="w-screen flex flex-col flex-grow mb-4">
        <HeroSection
          data={notFoundData}
          className="max-w-full  font-light text-base md:text-2xl lg:text-4xl px-2 lg:px-10"
        />
      </div>
    );
  }

  const blogData = {
    image: blog.image,
    title: blog.title,
    description: "",
    buttons: [],
  };

  return (
    <div className="w-screen flex flex-col flex-grow mb-4">
      <HeroSection
        data={blogData}
        className="max-w-full  font-light text-base md:text-2xl lg:text-4xl px-2 lg:px-10"
      />
      <div className="px-2 lg:px-32 mt-4">
        <TitleText title={blog.title} className="text-start lg:text-center" />
        <p className="">{blog.desc}</p>
        {blog.content.map((content, index: number) => (
          <div key={index}>
            <h3 className="text-xl font-bold my-4 uppercase text-primary">
              {content.heading}
            </h3>
            {content.image && (
              <Image
                src={content.image}
                alt={content.heading}
                width="1000"
                height="1000"
                className="w-full object-contain mb-4 rounded-md"
              />
            )}
            <p>{content.desc}</p>
          </div>
        ))}
      </div>
      {params.id}
    </div>
  );
}

import Image from "next/image";
import { Paragraph } from "./Typography";

export interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  id: number;
  createdAt: string;
  imagePriority: boolean;
}

export function BlogPostCard({
  title,
  description,
  slug,
  id,
  imagePriority,
}: BlogPostCardProps) {
  return (
    <div className="lg:max-w-xl">
      <a href={"/blog" + "/" + slug}>
        <Image
          priority={imagePriority}
          width={1920}
          height={1080}
          src={
            process.env.NEXT_PUBLIC_CDN_URL +
            "/posts" +
            "/" +
            id +
            "/" +
            "cover.jpg"
          }
          alt="Blog Post Image"
          className="w-full rounded"
        />
        <div className="py-4">
          <div className="mb-2 text-xl font-bold md:min-h-24">{title}</div>
          <Paragraph className="text-justify text-base text-gray-700">
            {description}
          </Paragraph>
        </div>
      </a>
    </div>
  );
}

export default BlogPostCard;

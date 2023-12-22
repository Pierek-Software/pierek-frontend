import Image from "next/image";
import { isoDateToRRRRMMDD } from "../../utils";

export interface IBlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  id: number;
  createdAt: string;
  imagePriority: boolean;
}

function BlogPostCard({
  title,
  description,
  slug,
  id,
  createdAt,
  imagePriority,
}: IBlogPostCardProps) {
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
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-justify text-base text-gray-700">{description}</p>
        </div>
        <div className="flex justify-end py-4">
          <p className=" font-thin ">{isoDateToRRRRMMDD(createdAt)}</p>
        </div>
      </a>
    </div>
  );
}

export default BlogPostCard;

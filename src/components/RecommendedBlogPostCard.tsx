import Image from "next/image";
import { Paragraph } from "./Typography";
import { Link } from "./Link";

export interface BlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  id: number;
  createdAt: string;
  imagePriority: boolean;
}

export function RecommendedBlogPostCard({
  title,
  description,
  slug,
  id,
  imagePriority,
}: BlogPostCardProps) {
  return (
    <Link href={"/blog" + "/" + slug}>
      <div className=" space-y-3 lg:max-w-xl">
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
        <h3 className="text-lg font-bold">{title}</h3>
        <Paragraph className="text-justify text-base text-gray-700">
          {description}
        </Paragraph>
      </div>
    </Link>
  );
}

export default RecommendedBlogPostCard;

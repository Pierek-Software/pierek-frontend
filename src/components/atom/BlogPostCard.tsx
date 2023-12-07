import { isoDateToRRRRMMDD } from "../../utils";

export interface IBlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  id: number;
  createdAt: string;
}

function BlogPostCard({
  title,
  description,
  slug,
  id,
  createdAt,
}: IBlogPostCardProps) {
  return (
    <div className="lg:max-w-xl">
      <a href={"/blog" + "/" + slug}>
        <img
          src={"/posts" + "/" + id + "/" + "cover.jpg"}
          alt="Blog Post Image"
          className="w-full rounded"
        />
        <div className="py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base text-justify">{description}</p>
        </div>
        <div className="py-4 flex justify-end">
          <p className=" font-thin ">{isoDateToRRRRMMDD(createdAt)}</p>
        </div>
      </a>
    </div>
  );
}

export default BlogPostCard;

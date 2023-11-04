import { isoDateToRRRRMMDD } from "../../utils";

export interface IBlogPostCardProps {
  title: string;
  description: string;
  slug: string;
  id: number;
  updatedAt: string;
}

function BlogPostCard({
  title,
  description,
  slug,
  id,
  updatedAt,
}: IBlogPostCardProps) {
  return (
    <div className="lg:max-w-xl">
      <a href={"/blog" + "/" + slug}>
        <img
          src={"/posts" + "/" + id + "/" + "cover.jpeg"}
          alt="Blog Post Image"
          className="w-full rounded"
        />
        <div className="py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base text-justify">{description}</p>
        </div>
        <div className="py-4 flex justify-end">
          <p className=" font-thin ">{isoDateToRRRRMMDD(updatedAt)}</p>
        </div>
      </a>
    </div>
  );
}

export default BlogPostCard;

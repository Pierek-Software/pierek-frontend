import { DiscoverMoreButton } from "../atom/Button";
import ArticleCard from "../molecules/ArticleCard";

function BlogSection() {
  return (
    <section className="container mx-auto">
      <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-gray-900">
        Blog
      </h1>
      <p className="text-2xl md:text-4xl font-light">
        Becuase valuable knowledge is worth reading
      </p>
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="flex md:flex-row flex-col md:max-w-6xl">
          <div className="p-3">
            <ArticleCard />
          </div>
          <div className="p-3">
            <ArticleCard />
          </div>
          <div className="p-3">
            <ArticleCard />
          </div>
        </div>
        <DiscoverMoreButton url="/blog" />
      </div>
    </section>
  );
}

export default BlogSection;

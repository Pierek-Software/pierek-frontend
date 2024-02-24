import Navbar from "../components/templates/Navbar";
import Footer from "../components/templates/Footer";
import HeadComponent from "../components/Head";
import ApiClient from "../api";
import BlogPostCard from "../components/BlogPostCard";
import { CaseStudyCard } from "./case-studies";
import data from "../data/case-studies.json";

function Home({ posts }) {
  return (
    <div>
      <HeadComponent
        title={"Home Page"}
        description={"Pierek is problems solving oriented company"}
        keywords={["Home Page"]}
      />
      <Navbar background={true} />

      <section
        className="
        flex h-screen flex-col bg-gradient-to-b from-gray-800 to-gray-950
        "
      >
        <section className="container">
          <div
            className="
            mt-10
            sm:mt-24
            md:mt-20
            lg:mt-5 lg:flex lg:items-center lg:align-middle
            "
          >
            <div className="lg:w-2/3">
              <h1
                className="
                text-center text-5xl font-bold leading-snug text-white
                sm:text-4xl
                md:text-7xl md:leading-relaxed
                lg:text-left lg:text-8xl lg:leading-tight
                2xl:max-w-7xl 2xl:text-9xl
                "
              >
                Problem solving oriented company
              </h1>
            </div>
            <div className="hidden w-1/3 lg:block">
              <img src="/static/header-illustration.png" />
              <h2
                className="
                mt-2 text-center text-xl font-bold leading-snug text-white
                "
              ></h2>
            </div>
          </div>
        </section>
        <div
          className="
          mt-14 flex justify-center
          md:mt-48
          lg:mt-24
          lg:hidden
          "
        >
          <a href="/contact">
            <button
              className="
            h-52 w-52 rounded-full border-2 bg-gray-800  text-3xl font-bold text-white hover:bg-gray-900
            md:h-80 md:w-80 md:border-4 md:text-5xl
            lg:hidden
            "
            >
              Contact
            </button>
          </a>
        </div>
      </section>
      <svg
        className="-mt-px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,32L120,74.7C240,117,480,203,720,218.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <section className="container">
        <HomepageHeaderWithCaption
          title="Custom Software Development"
          caption="I build solutions that fit business requirements"
        />
      </section>

      <svg
        className="-mb-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg
        className="-mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,176C672,181,768,203,864,192C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <TechnologiesSection />

      <svg
        className="-mb-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg
        className="-mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,176C672,181,768,203,864,192C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <CaseStudiesSection />

      <svg
        className="-mb-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg
        className="-mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#020617"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,176C672,181,768,203,864,192C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <BlogSection posts={posts} />

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const apiClient = new ApiClient();
  const posts = await apiClient.getPosts({
    pagination: { page: 1, perPage: 2 },
  });

  return { props: { posts } };
};

function Technology(props) {
  return (
    <div className="p-3">
      <img className="m-auto h-14 w-auto" src={props.src} alt={props.name} />
      <p className="text-md text-center md:text-lg">{props.name}</p>
    </div>
  );
}

function HomepageHeaderWithCaption({ title, caption }) {
  return (
    <span>
      <h2
        className="
        py-2
        text-4xl font-bold text-gray-900
        md:py-5 md:text-8xl
        "
      >
        {title}
      </h2>
      <p className="text-2xl font-light text-gray-800 md:text-4xl">{caption}</p>
    </span>
  );
}

function BlogSection({ posts }) {
  return (
    <section>
      <div className="container">
        <h2 className="py-2 text-4xl font-bold text-black md:py-5 md:text-8xl">
          Blog
        </h2>
        <p className="text-2xl font-light md:text-4xl">
          Because learning is key to knowledge
        </p>
      </div>

      <div className="container mt-5 flex flex-col items-center justify-between md:flex-row">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.data.map((post) => (
            <BlogPostCard
              imagePriority={true}
              key={post.id}
              id={post.id}
              slug={post.slug}
              title={post.title}
              description={post.description}
              createdAt={post.created_at}
            />
          ))}
        </div>
        <div className="pt-5 md:pl-5 md:pt-0">
          <DiscoverMoreButton url="/blog" />
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <>
      <section className="container mx-auto">
        <HomepageHeaderWithCaption
          title="Case Studies"
          caption="Kamil Wilim proof of work"
        />
        <div className="mt-5 flex flex-col items-center justify-between md:flex-row">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <CaseStudyCard {...data[2]} />
            <CaseStudyCard {...data[0]} />
          </div>
          <div className="pt-5 md:pl-5 md:pt-0">
            <DiscoverMoreButton url="/case-studies" />
          </div>
        </div>
      </section>
    </>
  );
}

function TechnologiesSection() {
  return (
    <section className="container">
      <HomepageHeaderWithCaption
        caption="The tools I use to build projects"
        title="Technologies"
      />

      <div className="flex flex-col items-center justify-between md:flex-row">
        <TechnologyPyramide />
        <DiscoverMoreButton url="/technologies" />
      </div>
    </section>
  );
}

function DiscoverMoreButton(props) {
  return (
    <a href={props.url}>
      <div className="flex w-28 flex-col items-center justify-center text-center">
        <img className="h-24" src="/icons/fa/arrow-right.svg" />
        <span>Discover more</span>
      </div>
    </a>
  );
}

function TechnologyPyramide() {
  return (
    <div className="flex flex-col justify-between">
      <div className="pt-4">
        <Technology
          src="/icons/fa/javascript.svg"
          name="JavaScript / TypeScript Development"
        />
      </div>
      <div className="flex justify-center pt-4">
        <Technology src="/icons/fa/nodejs.svg" name="Node.js Development" />
        <Technology src="/icons/fa/react.svg" name="React Development" />
      </div>
      <div className="flex justify-center pt-4">
        <Technology src="/icons/fa/aws.svg" name="Amazon Web Services" />
        <Technology src="/icons/fa/microsoft.svg" name="Microsoft Azure" />
        <Technology src="/icons/fa/google.svg" name="Google Cloud Platform" />
      </div>
    </div>
  );
}

export default Home;

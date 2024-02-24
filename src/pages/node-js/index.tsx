import { Header, Paragraph } from "../../components/Typography";
import ClientServiceLayout from "../../layouts/ClientServiceLayout";

export default function Page() {
  return (
    <ClientServiceLayout
      description="Node.js is a server-side JavaScript runtime that empowers developers to build scalable, high-performance applications. It utilizes an event-driven, non-blocking I/O model, making it ideal for real-time applications and microservices. With a vast ecosystem of modules, Node.js streamlines server-side development, fostering efficient and flexible web solutions."
      title="Node.js Development"
    >
      <Paragraph>
        Node.js is a powerful open-source runtime environment that enables
        server-side execution of JavaScript. It's designed for building scalable
        and efficient network applications, making it a popular choice for web
        servers, APIs, real-time applications, and more. Node.js uses an
        event-driven, non-blocking I/O model, allowing it to handle numerous
        connections simultaneously without slowing down. Its package manager,
        npm, boasts a vast ecosystem of reusable modules, streamlining
        development. With Node.js, developers can leverage a unified language
        across the entire stack, enhancing productivity and fostering rapid
        innovation in the world of web and networked applications.
      </Paragraph>

      <Header level={2}>Why use Node.js for next application?</Header>

      <Header level={2}>Microservice ready</Header>

      <Paragraph>
        Due to the inherent ease of application development, the option to
        bifurcate functionalities and isolate distinct business logic becomes
        increasingly feasible. This strategic partitioning becomes particularly
        valuable in scenarios where either a monorepo or a monolithic codebase
        experiences significant growth, thereby ensuring maintainability and
        scalability while upholding a structured and modular code architecture.
      </Paragraph>

      <Header level={2}>One language for frontend and backend</Header>
      <Paragraph>
        Given that Node.js is developed as a JavaScript runtime environment for
        backend applications, its seamless integration allows proficient
        JavaScript developers to readily transition their expertise to frontend
        frameworks such as Next.js, Nuxt.js, Vue.js, Angular, and libraries like
        React.js. This proficiency in a shared programming language facilitates
        a smooth and efficient transition between backend and frontend
        development paradigms.
      </Paragraph>

      <Header level={2}>Node.js Frameworks</Header>

      <section className="mt-5 flex flex-col flex-wrap lg:flex-row">
        <SingleStuff
          name="Express"
          description="Express is a minimal, flexible Node.js framework for building web applications and APIs. It simplifies server-side code with its robust routing and middleware features, allowing developers to create scalable and efficient web solutions."
          iconPath="/icons/express.svg"
          pluses={["Most popular Node.js Framework", "Easy to use", "Flexible"]}
          minuses={[
            "Easy to implement bad architecture",
            "Scaling problems",
            "Lack of structure",
          ]}
        />

        <SingleStuff
          name="Nest.js"
          description="Nest.js is a powerful and extensible Node.js framework for building efficient, scalable, and maintainable server-side applications. It combines elements of Object-Oriented Programming (OOP), Functional Programming, and Reactive Programming to provide a well-organized and structured development experience."
          iconPath="/icons/nestjs.svg"
          pluses={[
            "Modular and organized architecture",
            "Built-in support for TypeScript",
            "Robust dependency injection system",
          ]}
          minuses={[
            "Steeper learning curve for beginners",
            "Heavy abstraction may lead to overengineering",
            "Limited community and ecosystem compared to other frameworks",
          ]}
        />

        <SingleStuff
          name="Fastify"
          description="Fastify is a high-performance, low-overhead Node.js framework focused on speed and efficiency. It is designed to be extensible, allowing developers to easily add plugins and customize the behavior of their applications. Fastify excels in handling HTTP requests and is suitable for building APIs, microservices, and real-time applications."
          iconPath="/icons/fastify.svg"
          pluses={[
            "Exceptional performance benchmarks",
            "Extensive documentation and plugins",
            "Built-in support for modern JavaScript features",
          ]}
          minuses={[
            "Smaller community compared to Express",
            "May require more configuration for complex setups",
            "Less opinionated, requiring developers to make more decisions",
          ]}
        />

        <SingleStuff
          name="Koa"
          description="Koa is a lightweight and expressive Node.js framework designed by the creators of Express, with a focus on better middleware composition and a more streamlined HTTP request/response handling. It aims to provide developers with a minimalistic foundation to build web applications and APIs while leveraging modern JavaScript features."
          iconPath="/icons/koa.svg"
          pluses={[
            "Minimalistic and elegant design",
            "Promotes cleaner and more readable code",
            "Better error-handling using async/await",
          ]}
          minuses={["Smaller community and fewer plugins compared to Express"]}
        />
      </section>

      <Header level={2}>
        Node.js Frameworks - Perfomance less important than popularity
      </Header>

      <Paragraph>
        In the realm of Node.js development, the traditional obsession with
        performance is undergoing a transformation. This shift is substantiated
        by the prevalence of stateless applications within the ecosystem, which
        effortlessly lend themselves to clustering and traffic distribution.
        While Node.js is celebrated for its adeptness at handling concurrent
        connections, its true power emerges when harnessed to create
        horizontally scalable, cluster-friendly architectures. Stateless
        designs, unburdened by the complexities of managing shared states across
        instances, seamlessly distribute incoming traffic and enable dynamic
        scaling. In this context, performance takes a back seat to the elegance
        of scalability, streamlining maintenance and heralding a new era where
        Node.js proficiency extends beyond raw speed.
      </Paragraph>
    </ClientServiceLayout>
  );
}

function SingleStuff({ iconPath, name, description, pluses, minuses }) {
  return (
    <div className="py-3 lg:w-1/2 lg:px-3">
      <div className="rounded border-2 border-black p-3">
        <img className="w-15 mx-auto h-11" src={iconPath} alt={name} />
        <h2 className="text-center text-xl font-bold text-black">{name}</h2>

        <p className="mt-3 text-justify text-lg lg:h-64">{description}</p>

        <section className="mt-3 flex flex-col justify-between md:flex-row lg:h-64">
          <div className="md:w-1/2">
            {pluses.map((plus, index) => {
              return (
                <div key={index} className="mt-2 flex items-center">
                  <img alt="plus" className="h-5 w-5" src="/icons/plus.svg" />
                  <span className="text-md ml-3">{plus}</span>
                </div>
              );
            })}
          </div>

          <div className="md:w-1/2">
            {minuses.map((minus, index) => {
              return (
                <div key={index} className="mt-2 flex items-center">
                  <img alt="minus" className="h-5 w-5" src="/icons/minus.svg" />
                  <span className="text-md ml-3">{minus}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

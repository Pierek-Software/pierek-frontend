/* eslint-disable react/no-unescaped-entities */
"use client";

import Footer from "../../components/templates/Footer";
import Navbar from "../../components/templates/Navbar";

export default function NodeJSPage() {
  return (
    <>
      <Navbar background wave />
      <main className="container">
        <section>
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
            Node.js Development
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Efficient and fast building of microservices and backend
            applications
          </p>
        </section>

        <p className="mt-5 text-justify text-md md:text-xl lg:text-2xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose">
          Node.js is a powerful open-source runtime environment that enables
          server-side execution of JavaScript. It's designed for building
          scalable and efficient network applications, making it a popular
          choice for web servers, APIs, real-time applications, and more.
          Node.js uses an event-driven, non-blocking I/O model, allowing it to
          handle numerous connections simultaneously without slowing down. Its
          package manager, npm, boasts a vast ecosystem of reusable modules,
          streamlining development. With Node.js, developers can leverage a
          unified language across the entire stack, enhancing productivity and
          fostering rapid innovation in the world of web and networked
          applications.
        </p>

        <section>
          <h1 className="text-4xl md:text-8xl py-2 md:py-5 font-bold text-black">
            Node.js Frameworks
          </h1>
          <p className="text-2xl md:text-4xl font-light">
            Stable, enterprise grade tools used by our partners
          </p>
        </section>

        <section className="mt-5 flex justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 my-3 lg:mx-3">
            <SingleStuff
              name="Express"
              description="Express is a minimal, flexible Node.js framework for building web applications and APIs. It simplifies server-side code with its robust routing and middleware features, allowing developers to create scalable and efficient web solutions."
              iconPath="/icons/express.svg"
              pluses={[
                "Most popular Node.js Framework",
                "Easy to use",
                "Flexible",
              ]}
              minuses={[
                "Easy to implement bad architecture",
                "Scaling problems",
                "Lack of structure",
              ]}
            />
          </div>

          <div className="w-full lg:w-1/3 my-3 lg:mx-3">
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
          </div>

          <div className="w-full lg:w-1/3 my-3 lg:mx-3">
            <SingleStuff
              name="Koa"
              description="Koa is a lightweight and expressive Node.js framework designed by the creators of Express, with a focus on better middleware composition and a more streamlined HTTP request/response handling. It aims to provide developers with a minimalistic foundation to build web applications and APIs while leveraging modern JavaScript features."
              iconPath="/icons/koa.svg"
              pluses={[
                "Minimalistic and elegant design",
                "Promotes cleaner and more readable code",
                "Better error-handling using async/await",
              ]}
              minuses={[
                "Smaller community and fewer plugins compared to Express",
              ]}
            />
          </div>
        </section>

        <section className="mt-8 flex justify-center bg-gradient-to-b from-slate-700 to-slate-950 hover:from-slate-600 hover:to-slate-950 hover:cursor-pointer p-5 rounded">
          <a href="/contact">
            <h2 className="text-2xl py-6 md:text-4xl font-bold text-white">
              Interested in offer? <span className="underline">Contact us</span>
            </h2>
          </a>
        </section>
      </main>
      <Footer wave />
    </>
  );
}

function SingleStuff({ iconPath, name, description, pluses, minuses }) {
  return (
    <div className="p-3 rounded border border-black border-2">
      <img className="w-15 h-15 mx-auto" src={iconPath} alt={name} />
      <h2 className="text-center text-black text-xl font-bold">{name}</h2>

      <p className="mt-3 text-lg text-justify lg:h-64">{description}</p>

      <section className="mt-3 flex flex-col md:flex-row justify-between lg:h-64">
        <div className="md:w-1/2">
          {pluses.map((plus, index) => {
            return (
              <div key={index} className="mt-2 flex items-center">
                <img alt="plus" className="h-5 w-5" src="/icons/plus.svg" />
                <span className="ml-3 text-md">{plus}</span>
              </div>
            );
          })}
        </div>

        <div className="md:w-1/2">
          {minuses.map((minus, index) => {
            return (
              <div key={index} className="mt-2 flex items-center">
                <img alt="minus" className="h-5 w-5" src="/icons/minus.svg" />
                <span className="ml-3 text-md">{minus}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

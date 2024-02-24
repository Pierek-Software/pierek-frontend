import { Link } from "./Link";

export function ContactCTA() {
  return (
    <section className="flex justify-center rounded bg-gradient-to-b from-gray-800 to-gray-950 p-5 hover:cursor-pointer hover:from-gray-900 hover:to-gray-950">
      <Link href="/contact">
        <h2 className="py-6 text-2xl font-bold text-white md:text-4xl">
          Interested in offer? <span className="underline">Contact me</span>
        </h2>
      </Link>
    </section>
  );
}

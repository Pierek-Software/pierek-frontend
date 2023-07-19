/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center align-middle items-center p-6 max-w-6xl mx-auto">
        <li className="md:grow px-5 text-xl font-bold">
          <a href="/">
            <img
              className="h-6 md:h-9 "
              src="https://sklep329135.shoparena.pl/skins/user/rwd_primary_1/images/user/logo_white.svg"
              alt="My Happy SVG"
            />
          </a>
        </li>
        <li className="hidden md:block px-5 text-white text-2xl font-bold">
          Blog
        </li>
        <li className="hidden md:block px-5 text-white text-2xl font-bold">
          Carrer
        </li>
        <li className="hidden md:block px-5 text-white text-xl">
          <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-full">
            <a href="/contact">Contact</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}

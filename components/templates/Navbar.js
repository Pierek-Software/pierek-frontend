/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={props.background === true ? "bg-slate-800" : ""}>
      <ul className="flex justify-between md:justify-center align-middle items-center p-6 max-w-6xl mx-auto">
        <li className="md:grow px-5 text-xl font-bold">
          <a href="/">
            <img
              className="h-6 md:h-9 "
              src="https://sklep329135.shoparena.pl/skins/user/rwd_primary_1/images/user/logo_white.svg"
              alt="My Happy SVG"
            />
          </a>
        </li>
        <li className="md:hidden">
          <svg
            onClick={() => {
              setNavbarOpen(!navbarOpen);
              document.body.style.overflow = "hidden";
            }}
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </li>
        <li className="hidden md:block px-5 text-white text-2xl font-bold hover:underline">
          Blog
        </li>
        <li className="hidden md:block px-5 text-white text-2xl font-bold hover:underline">
          <a href="/futurology">Futurology</a>
        </li>
        <li className="hidden md:block px-5 text-white text-xl">
          <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-full">
            <a href="/contact">Contact</a>
          </button>
        </li>
      </ul>
      {navbarOpen === true ? (
        <section className="bg-slate-800 text-white absolute top-0 w-screen h-screen z-50 ">
          <div className="flex flex-row justify-end pr-6 pt-6">
            <svg
              onClick={() => {
                setNavbarOpen(!navbarOpen);
                document.body.style.overflow = "auto";
              }}
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          <div className="flex mt-20 flex-col">
            <a href="/" className="m-auto mt-8 font-bold text-2xl">
              Home Page
            </a>
            <a
              href="/futurology"
              className="m-auto mt-8 hover:underline font-bold text-2xl"
            >
              Futurology
            </a>
            <p className="m-auto mt-8">
              <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-full text-3xl">
                <a href="/contact">Contact</a>
              </button>
            </p>
          </div>
        </section>
      ) : null}
    </nav>
  );
}

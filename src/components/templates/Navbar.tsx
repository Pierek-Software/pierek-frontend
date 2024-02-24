import { useState } from "react";
import { Link } from "../Link";

export interface NavbarProps {
  background: boolean;
}

function DesktopNavbar(props) {
  return (
    <>
      <nav className={props.background === true ? "-mb-px bg-gray-800" : ""}>
        <ul
          className="
        container flex items-center justify-between py-5
        align-middle
        md:space-x-10
        md:py-10
        lg:justify-center
        lg:py-3
        "
        >
          <li className="text-xl font-bold lg:grow">
            <Link href="/">
              <img
                className="
                h-6
                md:h-9
                "
                src="/logo_white.svg"
                alt="Pierek Logo"
                title="Pierek Logo"
              />
            </Link>
          </li>
          <li className="lg:hidden">
            <svg
              onClick={() => {
                props.setNavbarOpen(!props.navbarOpen);
                document.body.style.overflow = "hidden";
              }}
              className="
              h-6 w-6 text-white
              md:h-9 md:w-9
              "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </li>

          <li className="hidden lg:block">
            <Link
              href="/technologies"
              className="text-2xl font-bold text-white hover:underline"
            >
              Technologies
            </Link>
          </li>

          <li className="hidden text-2xl font-bold text-white hover:underline lg:block">
            <Link
              className="text-2xl font-bold text-white hover:underline"
              href="/case-studies"
            >
              Case Studies
            </Link>
          </li>

          <li className="hidden text-xl text-white lg:block">
            <Link className={null} href="/contact">
              <button className="rounded-full bg-gray-700 px-5 py-2 font-bold text-white hover:bg-gray-950">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function MobileNavbar(props) {
  const MOBILE_NAVBAR_ITEM = "text-3xl font-bold";

  return (
    <nav className={props.background === true ? "-mb-px bg-gray-800" : ""}>
      <section className="absolute top-0 h-screen w-screen bg-gray-900 text-white">
        <div
          className="
            container flex flex-row justify-end py-5
            md:py-10
            "
        >
          <svg
            onClick={() => {
              props.setNavbarOpen(!props.navbarOpen);
              document.body.style.overflow = "auto";
            }}
            className="
                h-6 w-6 text-white
                md:h-9 md:w-9
                "
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
        <div className="mt-14 flex flex-col space-y-14 text-center">
          <Link href="/" className={MOBILE_NAVBAR_ITEM}>
            Home Page
          </Link>

          <Link href="/technologies" className={MOBILE_NAVBAR_ITEM}>
            Technologies
          </Link>

          <Link href="/case-studies" className={MOBILE_NAVBAR_ITEM}>
            Case Studies
          </Link>

          <Link
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/orgs/Pierek-Software/repositories"
            className={MOBILE_NAVBAR_ITEM}
          >
            Open Source
          </Link>

          <Link className={MOBILE_NAVBAR_ITEM} href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default function Navbar(props: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const renderNavbar = navbarOpen ? (
    <MobileNavbar
      {...props}
      navbarOpen={navbarOpen}
      setNavbarOpen={setNavbarOpen}
    />
  ) : (
    <DesktopNavbar
      {...props}
      navbarOpen={navbarOpen}
      setNavbarOpen={setNavbarOpen}
    />
  );

  return renderNavbar;
}

import { Link } from "./Link";

function Logo({ className }) {
  return (
    <Link href="/">
      {
        <img
          title="Pierek Logo"
          alt="Pierek Logo"
          className={className}
          src="/logo_white.svg"
        />
      }
    </Link>
  );
}

export default Logo;

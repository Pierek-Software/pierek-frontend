import { OriginalLink } from "./Link";

export default function Logo({ className }) {
  return (
    <OriginalLink
      href="/"
      name={
        <img
          title="Pierek Logo"
          alt="Pierek Logo"
          className={className}
          src="/logo.svg"
        />
      }
    ></OriginalLink>
  );
}

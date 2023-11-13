import { OriginalLink } from "./Link";

export default function Logo({ className }) {
  return (
    <OriginalLink
      href="/"
      name={
        <img alt="Pierek Logo" className={className} src="/logo_white.svg" />
      }
    ></OriginalLink>
  );
}

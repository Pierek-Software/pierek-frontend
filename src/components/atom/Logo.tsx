import { OriginalLink } from "./Link";

export default function Logo({ className }) {
  return (
    <OriginalLink
      href="/"
      name={
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="Pierek Logo" className={className} src="/logo_white.svg" />
      }
    ></OriginalLink>
  );
}

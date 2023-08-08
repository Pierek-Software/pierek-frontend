import Link from "next/link";

export interface OriginalLinkProps {
  name: any;
  href: string;
  className?: string;
}

export function OriginalLink({ className, name, href }: OriginalLinkProps) {
  return (
    <Link className={className} href={href}>
      {name}
    </Link>
  );
}

export function DefaultLink({ name, href }) {
  return <OriginalLink name={name} href={href} className="hover:underline" />;
}

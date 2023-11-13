import Link from "next/link";

export interface OriginalLinkProps {
  name: any;
  href: string;
  className?: string;
}

export function OriginalLink({ className, name, href }: OriginalLinkProps) {
  return (
    <Link title={name} className={className} href={href}>
      {name}
    </Link>
  );
}

export interface IDefaultLinkProps {
  name: string;
  href: string;
}

export function DefaultLink({ name, href }: IDefaultLinkProps) {
  return <OriginalLink name={name} href={href} className="hover:underline" />;
}

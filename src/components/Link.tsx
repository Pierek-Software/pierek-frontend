import NextLink from "next/link";

export const DEFAULT_LINK = "hover:underline md:my-0";

export interface LinkProps {
  target?: string;
  rel?: string;
  className?: string;
  children: any;
  href: string;
}

export function Link({ ...props }: LinkProps) {
  return (
    <NextLink
      {...props}
      className={props.className ? props.className : DEFAULT_LINK}
    >
      {props.children}
    </NextLink>
  );
}

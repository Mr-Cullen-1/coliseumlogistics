import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/links";

type ButtonVariant = "primary" | "secondary";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-bronze text-background hover:bg-bronze-light",
  secondary: "border border-line text-foreground hover:border-bronze/60 hover:text-bronze-light",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...externalLinkProps(href)} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const baseClassName =
  "inline-flex items-center justify-center rounded-full border border-[#ff8ccc] bg-cta px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-pop transition hover:-translate-y-0.5 hover:bg-[#ff63b6] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-cta";

export function Button(props: ButtonProps | LinkProps) {
  if ("href" in props) {
    const { children, className = "", href, ...rest } = props as LinkProps;

    return (
      <a href={href} className={`${baseClassName} ${className}`.trim()} {...rest}>
        {children}
      </a>
    );
  }

  const { children, className = "", type = "button", ...rest } = props as ButtonProps;

  return (
    <button type={type} className={`${baseClassName} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}

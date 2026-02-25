import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type Props = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button(props: Props) {
  const { variant = "primary", className = "" } = props;
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-orange-400";
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "border border-orange-500 text-orange-500 hover:bg-orange-500/10";

  if (props.as === "a") {
    const { as, variant: _variant, className: _className, ...anchorProps } = props;
    return <a className={`${base} ${styles} ${className}`} {...anchorProps} />;
  }

  const { as, variant: _variant, className: _className, ...buttonProps } = props;
  return <button className={`${base} ${styles} ${className}`} {...buttonProps} />;
}

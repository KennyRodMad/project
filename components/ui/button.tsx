import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-black text-white hover:bg-gray-800": variant === "default",
          "bg-white text-black border border-gray-300 hover:bg-gray-100": variant === "outline",
          "bg-red-600 text-white hover:bg-red-700": variant === "destructive",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";
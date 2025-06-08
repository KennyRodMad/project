import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
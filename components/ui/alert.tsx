import React from "react";
import clsx from "clsx";

export function Alert({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 border rounded-md px-4 py-3 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("flex-1", className)} {...props} />
  );
}
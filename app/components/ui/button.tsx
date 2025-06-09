import { cn } from "@/app/lib/utils";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gradient-to-tr from-gray-900 to-gray-700 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200",
          "hover:from-black hover:to-gray-800 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
          "active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

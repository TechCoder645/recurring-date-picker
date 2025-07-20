import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    const sizeClasses =
      size === "lg"
        ? "px-6 py-3 text-lg"
        : size === "sm"
        ? "px-3 py-1 text-sm"
        : "px-4 py-2 text-base"
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
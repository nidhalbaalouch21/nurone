import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg' | 'sm';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variant === 'default' && "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10",
          variant === 'outline' && "border border-border bg-transparent text-foreground hover:bg-foreground/5",
          size === 'default' && "h-10 px-4 py-2",
          size === 'lg' && "h-12 px-6 text-base",
          size === 'sm' && "h-9 px-3",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

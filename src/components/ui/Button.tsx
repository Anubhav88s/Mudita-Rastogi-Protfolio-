import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary:
                "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
            secondary: "bg-surface text-white hover:bg-white/10",
            outline:
                "border border-white/10 text-white hover:bg-white/5 hover:border-white/20",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };

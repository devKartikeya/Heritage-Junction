import React from "react";
import clsx from "clsx";
import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
    command: string;
    variant?: "primary" | "secondary" | "danger" | "peace";
    size?: "md" | "lg";
    icon?: React.ReactNode;
    onClick?: () => void;
    link: string;
}

const Button: React.FC<ButtonProps> = ({
    command,
    variant = "peace",
    size = "md",
    icon,
    link,
    onClick,
}) => {
    const baseStyles =
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97] hover:-translate-y-0.5";

    const variantStyles = {
        primary:
            "bg-purple-600 text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500 hover:shadow-purple-500/40 focus:ring-purple-500",

        secondary:
            "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:shadow-blue-400/40 focus:ring-blue-400",

        danger:
            "bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-400 hover:shadow-red-400/40 focus:ring-red-400",

        peace:
            "border border-white/20 bg-white/95 text-purple-700 shadow-lg shadow-black/20 backdrop-blur-md hover:bg-white hover:shadow-white/20 focus:ring-white",
    };

    const sizeStyles = {
        md: "px-5 py-3 text-sm sm:text-base",
        lg: "px-7 py-4 text-base sm:text-lg",
    };

    return (
        <Link
            href={link}
            onClick={onClick}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size]
            )}
        >
            {/* Subtle shine animation */}
            <span
                className="
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                "
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {icon && (
                    <span className="transition-transform duration-300 group-hover:scale-110">
                        {icon}
                    </span>
                )}

                <span>{command}</span>

                <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                    "
                />
            </span>
        </Link>
    );
};

export default Button;
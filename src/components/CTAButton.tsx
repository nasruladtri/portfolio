"use client";

import clsx from "clsx";

type CTAButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: "gradient" | "outline" | "text-link";
    className?: string;
    onClick?: () => void;
};

export const CTAButton = ({
    href,
    children,
    variant = "gradient",
    className,
    onClick,
}: CTAButtonProps) => {
    if (variant === "outline") {
        return (
            <a
                href={href}
                onClick={onClick}
                className={clsx(
                    "inline-block font-bold text-lg px-8 py-3 border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-secondary",
                    className
                )}
            >
                {children}
            </a>
        );
    }

    if (variant === "text-link") {
        return (
            <a
                href={href}
                onClick={onClick}
                className={clsx(
                    "inline-block font-bold text-lg bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent hover:translate-x-0.5 transition-transform",
                    className
                )}
            >
                {children}
            </a>
        );
    }

    return (
        <span
            className={clsx(
                "inline-block p-[2px] bg-gradient-to-br from-primary to-secondary",
                className
            )}
        >
            <a
                href={href}
                onClick={onClick}
                className="inline-block font-bold text-lg px-8 py-3 bg-white text-secondary transition-all duration-300 hover:bg-transparent hover:text-white"
            >
                {children}
            </a>
        </span>
    );
};
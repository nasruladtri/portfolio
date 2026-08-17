"use client";

import clsx from "clsx";

type CTAButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: "gradient" | "outline" | "text-link";
    className?: string;
};

export const CTAButton = ({
    href,
    children,
    variant = "gradient",
    className,
}: CTAButtonProps) => {
    if (variant === "outline") {
        return (
            <a
                href={href}
                className={clsx(
                    "pixel-btn bg-mario-green text-white shadow-[6px_6px_0_#000]",
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
                className={clsx(
                    "inline-block font-pixel uppercase tracking-wide text-[10px] text-black border-b-4 border-black hover:text-mario-red hover:border-mario-red transition-colors",
                    className
                )}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href}
            className={clsx(
                "pixel-btn bg-mario-red text-white shadow-[6px_6px_0_#000]",
                className
            )}
        >
            {children}
        </a>
    );
};

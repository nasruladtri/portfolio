export const PixelCloud = () => (
    <svg viewBox="0 0 96 40" width="100%" preserveAspectRatio="none" aria-hidden="true">
        <rect x="16" y="8" width="16" height="16" fill="#fff" />
        <rect x="32" y="0" width="32" height="24" fill="#fff" />
        <rect x="64" y="8" width="16" height="16" fill="#fff" />
        <rect x="0" y="24" width="96" height="16" fill="#fff" />
        <rect x="0" y="32" width="96" height="8" fill="#cfe8ff" />
    </svg>
);

export const PixelBush = () => (
    <svg viewBox="0 0 96 40" width="100%" preserveAspectRatio="none" aria-hidden="true">
        <rect x="8" y="16" width="28" height="16" fill="#3fae3f" />
        <rect x="34" y="8" width="28" height="24" fill="#3fae3f" />
        <rect x="60" y="16" width="28" height="16" fill="#3fae3f" />
        <rect x="0" y="32" width="96" height="8" fill="#2b8a2b" />
    </svg>
);

export const PixelHill = () => (
    <svg viewBox="0 0 128 64" width="100%" preserveAspectRatio="none" aria-hidden="true">
        <rect x="16" y="48" width="96" height="16" fill="#2f9f2f" />
        <rect x="32" y="32" width="64" height="16" fill="#2f9f2f" />
        <rect x="48" y="16" width="32" height="16" fill="#2f9f2f" />
        <rect x="64" y="48" width="48" height="16" fill="#217521" />
        <rect x="48" y="32" width="32" height="16" fill="#217521" />
        <rect x="64" y="16" width="16" height="16" fill="#217521" />
    </svg>
);

export const PixelCoin = () => (
    <svg viewBox="0 0 32 32" width="100%" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#ffd700" stroke="#000" strokeWidth="3" />
        <rect x="8" y="7" width="9" height="4" fill="#fff4c2" />
    </svg>
);

export const PixelQuestionBlock = () => (
    <svg viewBox="0 0 48 48" width="100%" aria-hidden="true">
        <rect width="48" height="48" fill="#ffb700" stroke="#7a4a00" strokeWidth="6" />
        <text
            x="24"
            y="36"
            textAnchor="middle"
            fontFamily="var(--font-pixel)"
            fontSize="28"
            fill="#7a4a00"
        >
            ?
        </text>
    </svg>
);

export const RetroBackground = () => (
    <>
        <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="cloud absolute top-10 left-0 w-28 opacity-90" style={{ animationDuration: "70s", animationDelay: "-20s" }}>
                <PixelCloud />
            </div>
            <div className="cloud absolute top-40 left-0 w-20 opacity-80" style={{ animationDuration: "55s", animationDelay: "-5s" }}>
                <PixelCloud />
            </div>
            <div className="cloud absolute top-24 left-0 w-24 opacity-70" style={{ animationDuration: "90s", animationDelay: "-40s" }}>
                <PixelCloud />
            </div>
            <div className="absolute top-[30%] left-[12%] w-16 hidden md:block">
                <PixelCoin />
            </div>
            <div className="absolute bottom-16 left-[8%] w-32">
                <PixelBush />
            </div>
            <div className="absolute bottom-12 right-[10%] w-36">
                <PixelBush />
            </div>
            <div className="absolute bottom-0 left-[22%] w-44">
                <PixelHill />
            </div>
            <div className="absolute bottom-0 right-[30%] w-32">
                <PixelHill />
            </div>
        </div>
        <div aria-hidden="true" className="fixed bottom-0 inset-x-0 z-0 h-8 pointer-events-none">
            <div className="h-4 bg-mario-green border-t-4 border-black" />
            <div className="h-4 ground-pattern" />
        </div>
    </>
);

"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

const RubberBandText = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span className={className}>
            {text.split("").map((letter, i) => (
                <motion.span
                    key={i}
                    className="inline-block cursor-default"
                    whileHover={{
                        scale: 1.25,
                        rotate: Math.random() * 20 - 10,
                        color: "#FFC107",
                        textShadow: "4px 4px 0px #000"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </span>
    );
};

export const Hero = () => {
    const [isRadioPlaying, setIsRadioPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleRadio = () => {
        if (audioRef.current) {
            if (isRadioPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.volume = 0.5;
                audioRef.current.play();
            }
            setIsRadioPlaying(!isRadioPlaying);
        }
    };

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center p-6 border-b-4 border-black bg-cream overflow-hidden relative">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Corner Brackets */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-black z-10" />
            <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-black z-10" />
            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-black z-10" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-black z-10" />

            {/* Rotating Starburst Badge */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-32 right-[15%] md:right-[20%] z-0 hidden md:block"
            >
                <svg viewBox="0 0 100 100" className="w-24 h-24 text-teal fill-current drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <path d="M50 0L61 35L98 35L68 57L79 91L50 70L21 91L32 57L2 35L39 35L50 0Z" />
                </svg>
            </motion.div>

            {/* Retro Zig-Zag */}
            <motion.div
                className="absolute bottom-32 left-[10%] hidden md:block z-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="100" height="30" viewBox="0 0 100 30" className="stroke-pink stroke-[6px] fill-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <path d="M2 15 L15 2 L28 15 L41 2 L54 15 L67 2 L80 15 L93 2" />
                </svg>
            </motion.div>

            {/* Draggable Stickers (Wildish & Co Style) */}
            {[
                { text: "EPIC", className: "top-24 left-[10%] bg-mustard text-dark text-3xl font-black px-6 py-2 -rotate-12", rotate: -12, delay: 0.2 },
                { text: "PORTFOLIO", className: "bottom-24 right-[15%] bg-dark text-cream text-3xl font-black px-6 py-2 rotate-6", rotate: 6, delay: 0.4 },
                { text: "2026", className: "top-40 right-[25%] bg-pink text-dark text-xl font-bold px-4 py-2 rotate-12", rotate: 12, delay: 0.6 },
                { text: "REACT", className: "top-32 left-[25%] bg-[#61DAFB] text-dark text-xl font-black px-3 py-1 -rotate-6", rotate: -6, delay: 0.8 },
                { text: "NEXT.JS", className: "bottom-40 left-[20%] bg-white text-dark text-xl font-black px-3 py-1 rotate-3", rotate: 3, delay: 1.0 },
                { text: "TS", className: "top-52 right-[10%] bg-[#3178C6] text-white text-xl font-black px-3 py-1 rotate-12", rotate: 12, delay: 1.2 },
                { text: "LARAVEL", className: "bottom-52 left-[5%] bg-[#FF2D20] text-white text-xl font-black px-3 py-1 -rotate-12", rotate: -12, delay: 1.4 },
                { text: "DOCKER", className: "top-64 right-[5%] bg-[#2496ED] text-white text-xl font-black px-3 py-1 rotate-6", rotate: 6, delay: 1.6 },
                { text: "POSTGRESQL", className: "bottom-32 right-[25%] bg-[#336791] text-white text-xl font-black px-3 py-1 -rotate-3", rotate: -3, delay: 1.8 },
                { text: "REST API", className: "top-24 left-[40%] bg-[#00C853] text-dark text-xl font-black px-3 py-1 rotate-2", rotate: 2, delay: 2.0 },
                { text: "FIGMA", className: "bottom-10 left-[35%] bg-[#F24E1E] text-white text-xl font-black px-3 py-1 -rotate-6", rotate: -6, delay: 2.2 },
                { text: "HTML", className: "top-10 left-[30%] bg-[#E34F26] text-white text-xl font-black px-3 py-1 rotate-3", rotate: 3, delay: 2.4 },
                { text: "CSS", className: "top-16 right-[35%] bg-[#1572B6] text-white text-xl font-black px-3 py-1 -rotate-2", rotate: -2, delay: 2.6 },
                { text: "JS", className: "bottom-40 right-[10%] bg-[#F7DF1E] text-dark text-xl font-black px-3 py-1 rotate-12", rotate: 12, delay: 2.8 },
                { text: "TAILWIND", className: "top-48 left-[5%] bg-[#38B2AC] text-white text-xl font-black px-3 py-1 -rotate-6", rotate: -6, delay: 3.0 },
                { text: "GIT", className: "bottom-16 left-[15%] bg-[#F05032] text-white text-xl font-black px-3 py-1 rotate-3", rotate: 3, delay: 3.2 },
            ].map((sticker, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isRadioPlaying ? [1, 1.2, 0.8, 1.1, 0.9, 1] : 1,
                        opacity: 1,
                        rotate: isRadioPlaying ? [sticker.rotate, sticker.rotate + 25, sticker.rotate - 25, sticker.rotate + 10, sticker.rotate - 10, sticker.rotate] : sticker.rotate,
                        y: isRadioPlaying ? [0, -60, 30, -20, 10, 0] : 0,
                        x: isRadioPlaying ? [0, -20, 20, -10, 10, 0] : 0,
                    }}
                    transition={isRadioPlaying ? { duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.02 } : { delay: sticker.delay, type: "spring" }}
                    drag
                    whileHover={{ scale: 1.1, rotate: sticker.rotate + 5, zIndex: 50 }}
                    whileDrag={{ scale: 1.2, zIndex: 50 }}
                    className={`absolute border-4 border-black shadow-hard cursor-grab active:cursor-grabbing hidden md:block z-20 ${sticker.className}`}
                >
                    {sticker.text}
                </motion.div>
            ))}

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 6 }}
                transition={{ delay: 0.4, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -5, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-24 right-[15%] bg-dark text-cream text-3xl font-black px-6 py-2 border-4 border-black shadow-hard rotate-6 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                PORTFOLIO
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 12 }}
                transition={{ delay: 0.6, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 15, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-40 right-[25%] bg-pink text-dark text-xl font-bold px-4 py-2 border-4 border-black shadow-hard rotate-12 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                2026
            </motion.div>

            {/* Tech Stack Stickers */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -6 }}
                transition={{ delay: 0.8, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -10, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-32 left-[25%] bg-[#61DAFB] text-dark text-xl font-black px-3 py-1 border-4 border-black shadow-hard -rotate-6 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                REACT
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 3 }}
                transition={{ delay: 1.0, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 10, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-40 left-[20%] bg-white text-dark text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-3 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                NEXT.JS
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 12 }}
                transition={{ delay: 1.2, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -15, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-52 right-[10%] bg-[#3178C6] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-12 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                TS
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -12 }}
                transition={{ delay: 1.4, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 20, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-52 left-[5%] bg-[#FF2D20] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard -rotate-12 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                LARAVEL
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 6 }}
                transition={{ delay: 1.6, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -5, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-64 right-[5%] bg-[#2496ED] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-6 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                DOCKER
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -3 }}
                transition={{ delay: 1.8, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 8, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-32 right-[25%] bg-[#336791] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard -rotate-3 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                POSTGRESQL
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 2 }}
                transition={{ delay: 2.0, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -8, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-24 left-[40%] bg-[#00C853] text-dark text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-2 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                REST API
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -6 }}
                transition={{ delay: 2.2, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 12, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-10 left-[35%] bg-[#F24E1E] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard -rotate-6 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                FIGMA
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 3 }}
                transition={{ delay: 2.4, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -5, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-10 left-[30%] bg-[#E34F26] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-3 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                HTML
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -2 }}
                transition={{ delay: 2.6, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 8, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-16 right-[35%] bg-[#1572B6] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard -rotate-2 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                CSS
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 12 }}
                transition={{ delay: 2.8, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -10, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-40 right-[10%] bg-[#F7DF1E] text-dark text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-12 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                JS
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -6 }}
                transition={{ delay: 3.0, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: 6, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute top-48 left-[5%] bg-[#38B2AC] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard -rotate-6 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                TAILWIND
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 3 }}
                transition={{ delay: 3.2, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, rotate: -4, zIndex: 50 }}
                whileDrag={{ scale: 1.2, zIndex: 50 }}
                className="absolute bottom-16 left-[15%] bg-[#F05032] text-white text-xl font-black px-3 py-1 border-4 border-black shadow-hard rotate-3 cursor-grab active:cursor-grabbing hidden md:block z-20"
            >
                GIT
            </motion.div>

            {/* Retro Window */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isRadioPlaying ? [1, 1.1, 0.9, 1.05, 1] : 1,
                    opacity: 1,
                    y: isRadioPlaying ? [0, -40, 20, -10, 0] : 0,
                    rotate: isRadioPlaying ? [0, 5, -5, 3, -3, 0] : 0
                }}
                transition={isRadioPlaying ? { duration: 0.6, repeat: Infinity, ease: "linear" } : { delay: 3.4, type: "spring" }}
                drag
                whileHover={{ scale: 1.1, zIndex: 60 }}
                whileDrag={{ scale: 1.2, zIndex: 60 }}
                className="absolute bottom-60 left-[10%] w-40 bg-gray-200 border-2 border-t-white border-l-white border-b-black border-r-black shadow-hard z-30 hidden md:block"
            >
                <div className="bg-blue-800 text-white px-1 py-0.5 text-xs font-bold flex justify-between items-center select-none">
                    <span>SYSTEM.EXE</span>
                    <div className="w-3 h-3 bg-gray-200 border border-t-white border-l-white border-b-black border-r-black text-black flex items-center justify-center text-[8px] leading-none">x</div>
                </div>
                <div className="p-2 text-center font-mono text-xs select-none flex flex-col items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
                        alt="MUFC"
                        className="w-12 h-12 drop-shadow-md object-contain"
                    />
                    <p className="text-[10px] font-bold text-red-700 leading-none">GLORY GLORY<br />MAN UNITED</p>
                    <button className="px-2 py-0.5 border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white bg-gray-300">OK</button>
                </div>
            </motion.div>

            {/* Retro Radio (The 1975 Player) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3.8, type: "spring" }}
                drag
                whileHover={{ scale: 1.05 }}
                whileDrag={{ scale: 1.1 }}
                onClick={toggleRadio}
                className="absolute top-[50%] right-[10%] cursor-pointer z-30 hidden md:flex flex-col items-center"
            >
                <div className={`w-32 h-20 bg-orange-500 border-4 border-black shadow-hard rounded-lg p-2 flex flex-col justify-between relative ${isRadioPlaying ? 'animate-pulse-slow' : ''}`}>
                    {/* Handle */}
                    <div className="absolute -top-4 w-12 h-4 border-4 border-black border-b-0 rounded-t-lg left-1/2 -translate-x-1/2 bg-transparent" />

                    {/* Speakers */}
                    <div className="flex justify-between items-center h-full">
                        <div className="w-8 h-8 rounded-full bg-dark border-2 border-black relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(#555_1px,transparent_1px)] [background-size:2px_2px]" />
                        </div>
                        {/* Controls */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-4 bg-teal border-2 border-black text-[6px] flex items-center justify-center font-mono">
                                {isRadioPlaying ? "PLAY" : "STOP"}
                            </div>
                            <div className="w-2 h-2 rounded-full border border-black bg-red-500" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-dark border-2 border-black relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(#555_1px,transparent_1px)] [background-size:2px_2px]" />
                        </div>
                    </div>
                </div>

                {/* Floating Notes when playing */}
                {isRadioPlaying && (
                    <motion.div
                        className="absolute -top-10 -right-8 text-2xl"
                        animate={{ y: -20, opacity: 0, rotate: 20 }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        🎵
                    </motion.div>
                )}
                {isRadioPlaying && (
                    <motion.div
                        className="absolute -top-8 -left-8 text-2xl"
                        animate={{ y: -20, opacity: 0, rotate: -20 }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
                    >
                        🎶
                    </motion.div>
                )}

                <audio ref={audioRef} loop src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f4/75/68/f47568c5-e517-a680-d89e-84c079206011/mzaf_8947438232884630666.plus.aac.p.m4a" />
            </motion.div>

            {/* Pixel Cursor */}
            <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{
                    opacity: 1,
                    x: isRadioPlaying ? [0, 50, -50, 0] : 0,
                    y: isRadioPlaying ? [0, -50, 50, 0] : 0,
                    rotate: isRadioPlaying ? [0, 360, 0] : 0
                }}
                transition={isRadioPlaying ? { duration: 1, repeat: Infinity, ease: "circInOut" } : { delay: 3.6, type: "spring" }}
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                className="absolute top-1/3 right-[10%] z-20 hidden md:block"
            >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L8.29289 15.7071H3C2.44772 15.7071 2 15.2594 2 14.7071V9.70711C2 9.15482 2.44772 8.70711 3 8.70711H8.29289L11.2929 3.29289ZM12 4.41421L6 10.4142L4 10.4142V14.0001L6 14.0001L12 20.0001V4.41421Z" fill="#FFC107" />
                    <path d="M5.5 8.5L9 2L15 8L22 15L15 22L9 16L2 9L5.5 8.5Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M8 8V16H16L8 8Z" fill="white" />
                </svg>
                {/* Replaced svg with a simple polygon cursor for better retro feel */}
                <div className="relative w-12 h-18">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-white stroke-black stroke-2 drop-shadow-hard">
                        <polygon points="0,0 0,80 20,60 40,90 55,80 35,50 70,50" />
                    </svg>
                </div>
            </motion.div>
            {/* Pixel Smiley */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                    scale: isRadioPlaying ? [1, 1.3, 0.7, 1.2, 1] : 1,
                    rotate: isRadioPlaying ? [0, 180, -180, 0] : 0,
                    y: isRadioPlaying ? [0, -80, 0] : 0,
                    x: isRadioPlaying ? [0, -20, 20, 0] : 0
                }}
                transition={isRadioPlaying ? { duration: 0.5, repeat: Infinity, ease: "backInOut" } : { delay: 0.5, type: "spring" }}
                drag
                whileDrag={{ scale: 1.2 }}
                className="absolute top-64 left-[5%] cursor-grab active:cursor-grabbing z-20 hidden md:block"
            >
                <div className="w-16 h-16 bg-mustard border-4 border-black shadow-hard flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-black" />
                    <div className="absolute top-4 right-4 w-2 h-2 bg-black" />
                    <div className="absolute bottom-4 left-4 w-8 h-2 bg-black" />
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-black" />
                    <div className="absolute bottom-6 right-4 w-2 h-2 bg-black" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative"
            >
                <div className="text-6xl md:text-8xl lg:text-9xl mb-4 leading-tight font-serif font-bold">
                    <RubberBandText text="NASRUL" /> <br className="md:hidden" />
                    <RubberBandText text="ADITRI" className="text-mustard text-shadow-hard stroke-black text-stroke-2" />
                </div>

                <p className="text-xl md:text-2xl font-sans max-w-2xl mx-auto mb-10 font-medium bg-white/50 backdrop-blur-sm border-2 border-black inline-block px-4 py-2 rotate-1">
                    Web Developer • Building digital experiences with code.
                </p>

                <motion.button
                    whileHover={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-mustard text-dark text-xl font-bold py-4 px-10 border-4 border-black shadow-hard transition-all duration-200"
                >
                    VIEW PROJECTS
                </motion.button>
            </motion.div>


        </section >
    );
};

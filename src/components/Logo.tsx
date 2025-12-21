import React from 'react';

const Logo = ({ className = "w-10 h-10", iconOnly = false, noBox = false }: { className?: string, iconOnly?: boolean, noBox?: boolean }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative group shrink-0 w-full h-full flex items-center justify-center">
                {!noBox && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-lamaSky to-lamaPurple rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                )}

                <div className={`relative w-full h-full flex items-center justify-center ${noBox ? '' : 'bg-white p-2 rounded-xl shadow-lg border border-slate-200 backdrop-blur-sm'} transition-all duration-300`}>
                    <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full object-contain"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="logo-gradient-v3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#38bdf8" />
                                <stop offset="100%" stopColor="#cf66ff" />
                            </linearGradient>
                        </defs>

                        {/* The Graduation Cap - Centered and contained */}
                        <path
                            d="M12 4L3 9L12 14L21 9L12 4Z"
                            fill="url(#logo-gradient-v3)"
                        />
                        <path
                            d="M7 11V16C7 16 9 18.5 12 18.5C15 18.5 17 16 17 16V11"
                            stroke="#cf66ff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />

                        {/* The Growth Arrow - Stylized White */}
                        <path
                            d="M14 11L17 8L20 11"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17 8V14"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {!iconOnly && (
                <span className="hidden lg:block font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lamaSky to-lamaPurple whitespace-nowrap">
                    Mente&apos;s School
                </span>
            )}
        </div>
    );
};

export default Logo;

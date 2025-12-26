import React from 'react';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

const Logo = ({ className = "", textColor = "text-black", iconOnly = false }: { className?: string, textColor?: string, iconOnly?: boolean }) => {
    return (
        <Link href="/" className={`flex items-center gap-3 group cursor-pointer ${className}`}>
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
            </div>
            {!iconOnly && (
                <div className="flex flex-col leading-tight">
                    <span className={`text-base font-semibold ${textColor}`}>Bini's</span>
                    <span className="text-base font-semibold text-[#6B7AFF]">School</span>
                </div>
            )}
        </Link>
    );
};

export default Logo;


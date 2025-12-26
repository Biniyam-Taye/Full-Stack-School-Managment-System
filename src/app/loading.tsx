import { GraduationCap } from "lucide-react";

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a] z-50 overflow-hidden relative">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/30 via-purple-500/20 to-yellow-400/10 blur-[100px] opacity-40 animate-pulse"></div>

            <div className="relative flex flex-col items-center gap-10">
                {/* Logo Section */}
                <div className="relative">
                    {/* Animated Rings */}
                    <div className="absolute inset-[-40px] rounded-full border border-dashed border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-[-24px] rounded-full border border-yellow-400/20 animate-[spin_8s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-[-10px] rounded-full border border-purple-500/30 animate-[spin_6s_linear_infinite]"></div>

                    {/* Central Icon */}
                    <div className="relative w-24 h-24 bg-white/5 p-6 rounded-full shadow-[0_0_50px_rgba(250,204,21,0.15)] border border-white/10 backdrop-blur-xl flex items-center justify-center animate-bounce-slow">
                        <GraduationCap className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                    </div>
                </div>

                {/* Text and Bar */}
                <div className="flex flex-col items-center gap-6 z-10">
                    <div className="flex flex-col items-center leading-none tracking-tighter">
                        <h1 className="text-4xl font-light text-white/90 mb-1">Bini&apos;s</h1>
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]">
                            School
                        </h1>
                    </div>

                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 rounded-full animate-[loading_1.5s_ease-in-out_infinite] w-1/3 blur-[1px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Logo from "@/components/Logo";

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white/80 backdrop-blur-md z-50">
            <div className="relative flex flex-col items-center gap-8">
                {/* Logo with Wow Effect */}
                <div className="relative">
                    {/* Animated Rings */}
                    <div className="absolute inset-[-40px] rounded-full border-2 border-dashed border-lamaSky/30 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-[-20px] rounded-full border-2 border-lamaPurple/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                    {/* Glowing Aura */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-lamaSky to-lamaPurple rounded-full blur-3xl opacity-20 animate-pulse"></div>

                    <div className="relative bg-white/10 p-4 rounded-3xl shadow-glow border border-white/20 backdrop-blur-xl hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                        <Logo noBox iconOnly className="w-20 h-20" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-lamaSky via-lamaPurple to-lamaSky bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                        Mente&apos;s School
                    </div>
                    <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-lamaSky to-lamaPurple rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { User, School, GraduationCap, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export default function PortalsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
            {/* Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center px-6 py-6 md:px-16 md:py-8"
            >
                <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="text-xl font-medium tracking-tight">Bini's School</span>
                </Link>

                <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400 uppercase tracking-widest">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/portals" className="text-white transition-colors">Portals</Link>
                </div>

                <Link
                    href="/sign-in"
                    className="hidden md:block px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-yellow-400 transition-colors"
                >
                    Login
                </Link>
            </motion.nav>

            <main className="w-full px-6 md:px-16 pt-12 md:pt-20 pb-20 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="mb-20 text-center"
                    >
                        <motion.h4 variants={fadeInUp} className="text-gray-500 text-lg mb-4 tracking-wide">
                            Access Your Dashboard
                        </motion.h4>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Portal</span>
                        </motion.h1>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {/* Card 1: Admin (Blue) */}
                        <Card
                            bg="bg-blue-600"
                            textColor="text-white"
                            title="Admin"
                            subtitle="Dashboard & Control"
                            icon={<User className="w-16 h-16 mb-auto opacity-80" />}
                            index="01"
                            link="/sign-in?role=admin"
                        />

                        {/* Card 2: Teacher (Yellow) */}
                        <Card
                            bg="bg-[#fced66]"
                            textColor="text-black"
                            title="Teacher"
                            subtitle="Classroom Mgmt"
                            icon={<School className="w-16 h-16 mb-auto opacity-80" />}
                            index="02"
                            link="/sign-in?role=teacher"
                        />

                        {/* Card 3: Student (White) */}
                        <Card
                            bg="bg-white"
                            textColor="text-black"
                            title="Student"
                            subtitle="Learn & Grow"
                            icon={<GraduationCap className="w-16 h-16 mb-auto opacity-80" />}
                            index="03"
                            link="/sign-in?role=student"
                        />

                        {/* Card 4: Parent (Dark Glass) */}
                        <Card
                            bg="bg-white/10 backdrop-blur-md border border-white/10"
                            textColor="text-white"
                            title="Parent"
                            subtitle="Monitor Progress"
                            icon={<Users className="w-16 h-16 mb-auto opacity-80" />}
                            index="04"
                            link="/sign-in?role=parent"
                        />
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

function Card({ bg, textColor, title, subtitle, icon, index, link }: any) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "backOut" as const } }
    };

    return (
        <motion.div variants={variants} className="h-full">
            <Link href={link} className="block h-full cursor-none lg:cursor-pointer group">
                <div className={`${bg} ${textColor} p-10 rounded-[2.5rem] h-[350px] flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1`}>

                    {/* Top Section */}
                    <div className="flex justify-between items-start z-10">
                        <span className="font-mono text-sm opacity-60 tracking-widest">PORTAL_{index}</span>
                        <div className="w-8 h-1 bg-current opacity-20"></div>
                    </div>

                    {/* Icon Graphic Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[3] opacity-[0.05] pointer-events-none">
                        {icon}
                    </div>

                    {/* Bottom Section */}
                    <div className="z-10">
                        <div className="mb-6">
                            {icon}
                        </div>
                        <h3 className="text-5xl font-bold tracking-tighter mb-2 leading-none">{title}</h3>
                        <p className="text-lg opacity-70 font-medium">{subtitle}</p>
                    </div>

                    <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                        <ArrowRight size={32} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

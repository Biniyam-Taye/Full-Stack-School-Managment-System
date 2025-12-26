"use client";

import Link from "next/link";
import Image from "next/image";
import { User, GraduationCap, School, Users, Play, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "@/components/Logo";

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

export default function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
            {/* Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center px-6 py-6 md:px-16 md:py-8 relative z-50"
            >
                <Logo textColor="text-white" />

                <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400 uppercase tracking-widest">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/portals" className="hover:text-white transition-colors">Portals</Link>
                </div>

                <Link
                    href="/sign-in"
                    className="hidden md:block px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-yellow-400 transition-colors"
                >
                    Login
                </Link>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden space-y-1.5 cursor-pointer z-50 relative"
                    aria-label="Toggle menu"
                >
                    {!mobileMenuOpen ? (
                        <>
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-8 h-0.5 bg-white"></div>
                        </>
                    ) : (
                        <X className="w-6 h-6 text-white" />
                    )}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 w-full h-screen bg-[#0a0a0a] z-40 md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/portals"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            Portals
                        </Link>
                        <Link
                            href="/sign-in"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-8 py-3 bg-yellow-400 text-black text-lg font-bold rounded-full hover:bg-white transition-colors"
                        >
                            Login
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <main className="w-full px-6 md:px-16 pt-12 md:pt-20 pb-20 relative">

                {/* Abstract Graphic with Image (Top Right) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute top-32 right-4 w-[180px] h-[180px] md:-top-32 md:right-0 md:w-[800px] md:h-[800px] pointer-events-none z-0"
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Glowing Gradient Background */}
                        <div className="absolute w-[80%] h-[80%] rounded-3xl bg-gradient-to-tr from-blue-600 via-purple-500 to-yellow-400 blur-[100px] opacity-30 animate-pulse"></div>

                        {/* Rounded Rectangle Image Container with Soft Fade Effect */}
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            <div
                                className="w-full h-full relative rounded-3xl"
                                style={{
                                    maskImage: 'radial-gradient(ellipse 100% 100% at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
                                    WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)'
                                }}
                            >
                                <div className="w-full h-full rounded-3xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                        alt="Students studying"
                                        fill
                                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Floating Orbital Elements */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-3xl border border-white/5 animate-spin-slow pointer-events-none"></div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col justify-center"
                    >
                        <motion.h4 variants={fadeInUp} className="text-gray-500 text-lg mb-4 tracking-wide">
                            For Better Education
                        </motion.h4>

                        <motion.div variants={fadeInUp} className="relative mb-6">
                            <h1 className="text-7xl md:text-[8rem] leading-[0.9] font-light tracking-tighter text-white/90">
                                Bini's
                            </h1>
                            <h1 className="text-7xl md:text-[8rem] leading-[0.9] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 pb-4">
                                School
                            </h1>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-6 text-sm text-gray-500 font-mono mb-12">
                            <span>01 ADMIN</span>
                            <span>02 TEACHER</span>
                            <span>03 STUDENT</span>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <Link href="#portals" className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 rounded-full text-black font-bold hover:bg-white transition-colors group">
                                <span className="p-1 bg-black text-white rounded-full">
                                    <Play size={10} fill="currentColor" />
                                </span>
                                Get Started
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Empty for now or specific graphic */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Cards Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    id="portals"
                    className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* Card 1: Admin (Blue) */}
                    <Card
                        bg="bg-blue-600"
                        textColor="text-white"
                        title="Admin"
                        subtitle="Dashboard & Control"
                        icon={<User className="w-12 h-12 mb-auto opacity-80" />}
                        index="01"
                        link="/sign-in?role=admin"
                    />

                    {/* Card 2: Teacher (Yellow) */}
                    <Card
                        bg="bg-[#fced66]"
                        textColor="text-black"
                        title="Teacher"
                        subtitle="Classroom Mgmt"
                        icon={<School className="w-12 h-12 mb-auto opacity-80" />}
                        index="02"
                        link="/sign-in?role=teacher"
                    />

                    {/* Card 3: Student (White) */}
                    <Card
                        bg="bg-white"
                        textColor="text-black"
                        title="Student"
                        subtitle="Learn & Grow"
                        icon={<GraduationCap className="w-12 h-12 mb-auto opacity-80" />}
                        index="03"
                        link="/sign-in?role=student"
                    />

                    {/* Card 4: Parent (Dark Glass) */}
                    <Card
                        bg="bg-white/10 backdrop-blur-md border border-white/10"
                        textColor="text-white"
                        title="Parent"
                        subtitle="Monitor Progress"
                        icon={<Users className="w-12 h-12 mb-auto opacity-80" />}
                        index="04"
                        link="/sign-in?role=parent"
                    />

                </motion.div>

                <div className="mt-32 text-center">
                    <p className="text-gray-600 text-sm">
                        Want to know more about us? <br />
                        <span className="text-white underline decoration-wavy decoration-yellow-400 underline-offset-4 mt-2 inline-block">Read our story</span>
                    </p>
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
                <div className={`${bg} ${textColor} p-8 rounded-[2rem] h-[320px] flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1`}>

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
                        <div className="mb-4">
                            {icon}
                        </div>
                        <h3 className="text-4xl font-bold tracking-tighter mb-1 leading-none">{title}</h3>
                        <p className="text-sm opacity-70 font-medium">{subtitle}</p>
                    </div>

                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                        <ArrowRight />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

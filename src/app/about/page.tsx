"use client";

import Link from "next/link";
import { Play, ArrowRight, Target, Lightbulb, History, Award, School } from "lucide-react";
import { motion } from "framer-motion";
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

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
            {/* Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center px-6 py-6 md:px-16 md:py-8"
            >
                <Logo textColor="text-white" />

                <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400 uppercase tracking-widest">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="text-white transition-colors">About</Link>
                    <Link href="/portals" className="hover:text-white transition-colors">Portals</Link>
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
                        className="mb-20"
                    >
                        <motion.h4 variants={fadeInUp} className="text-gray-500 text-lg mb-4 tracking-wide">
                            Who We Are
                        </motion.h4>
                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Education</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                            At Bini's School, we believe in fostering a culture of innovation, excellence, and community. We are more than just a school; we are a launchpad for the future leaders of the world.
                        </motion.p>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <Card
                            bg="bg-[#fced66]"
                            textColor="text-black"
                            title="Our Mission"
                            subtitle="Empowering Growth"
                            description="To provide exceptional education that nurtures critical thinking, creativity, and character development. We empower every student to reach their full potential through innovative teaching methods and personalized learning experiences."
                            icon={<Target className="w-12 h-12 mb-auto opacity-80" />}
                            index="01"
                        />
                        <Card
                            bg="bg-blue-600"
                            textColor="text-white"
                            title="Our Vision"
                            subtitle="Future Ready"
                            description="To be a leading institution that shapes tomorrow's leaders and innovators. We envision a community where students are equipped with 21st-century skills, global perspectives, and the confidence to make a positive impact on the world."
                            icon={<Lightbulb className="w-12 h-12 mb-auto opacity-80" />}
                            index="02"
                        />
                        <Card
                            bg="bg-white"
                            textColor="text-black"
                            title="Our History"
                            subtitle="Legacy of Success"
                            description="Founded with a vision to transform education, Bini's School has been a beacon of academic excellence for years. Our journey is marked by countless success stories, innovative programs, and a commitment to continuous improvement."
                            icon={<History className="w-12 h-12 mb-auto opacity-80" />}
                            index="03"
                        />
                        <div className="md:col-span-3">
                            <Card
                                bg="bg-white/10 backdrop-blur-md border border-white/10"
                                textColor="text-white"
                                title="Awards & Recognition"
                                subtitle="Celebrating Excellence across the globe"
                                description="Our commitment to excellence has been recognized nationally and internationally. From academic achievements to innovative teaching practices, we've received numerous accolades that reflect our dedication to providing world-class education and fostering student success."
                                icon={<Award className="w-12 h-12 mb-auto opacity-80" />}
                                index="04"
                                fullWidth
                            />
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

function Card({ bg, textColor, title, subtitle, description, icon, index, fullWidth }: any) {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "backOut" as const } }
    };

    return (
        <motion.div variants={variants} className={`h-full ${fullWidth ? 'w-full' : ''}`}>
            <div className={`${bg} ${textColor} p-8 rounded-[2rem] ${fullWidth ? 'h-auto md:h-auto min-h-[250px]' : 'h-auto min-h-[450px]'} flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-default`}>

                <div className="flex justify-between items-start z-10 w-full relative">
                    <span className="font-mono text-sm opacity-60 tracking-widest">INFO_{index}</span>
                    <div className="w-8 h-1 bg-current opacity-20"></div>
                </div>

                {/* Icon Graphic Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[3] opacity-[0.05] pointer-events-none">
                    {icon}
                </div>

                <div className="z-10 mt-auto">
                    <div className="mb-4">
                        {icon}
                    </div>
                    <h3 className="text-4xl font-bold tracking-tighter mb-2 leading-none">{title}</h3>
                    <p className="text-sm opacity-70 font-medium mb-3">{subtitle}</p>
                    {description && (
                        <p className="text-sm opacity-60 leading-relaxed max-w-2xl">{description}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

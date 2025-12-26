import { GraduationCap } from "lucide-react";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT - SIDEBAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 z-10 overflow-y-auto scrollbar-hide glass-sidebar">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-4 mb-8 group"
        >
          <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center bg-white/50 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all">
            <GraduationCap className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="hidden lg:flex flex-col leading-none">
            <span className="font-medium text-slate-600 tracking-tight text-lg group-hover:text-slate-900 transition-colors">Bini&apos;s</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 tracking-tight text-lg">
              School
            </span>
          </div>
        </Link>
        <Menu />
      </div>
      {/* RIGHT - MAIN CONTENT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

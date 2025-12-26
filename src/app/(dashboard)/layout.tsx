import { School } from "lucide-react";
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
          className="flex items-center justify-center lg:justify-start gap-3 mb-8"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-lamaSky to-lamaPurple rounded-lg shadow-md">
            <School className="text-white w-6 h-6" />
          </div>
          <span className="hidden lg:block font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lamaSky to-lamaPurple whitespace-nowrap">
            Bini&apos;s School
          </span>
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

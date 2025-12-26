"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import { User, GraduationCap, School, Users } from "lucide-react";

const LoginPageContent = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Get role from URL (default to generic if missing)
  const roleParam = searchParams.get("role");
  const displayRole = roleParam
    ? roleParam.charAt(0).toUpperCase() + roleParam.slice(1)
    : "";

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    // Trigger redirect state only after client-side hydration confirms auth
    setIsRedirecting(true);

    const role = user?.publicMetadata?.role;
    if (role && typeof role === 'string') {
      window.location.href = `/${role.toLowerCase()}`;
    } else {
      window.location.href = '/';
    }
  }, [isLoaded, isSignedIn, user]);

  // Show a loading text if authenticated but not yet redirected
  if (isRedirecting) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-yellow-400 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-yellow-400/50 animate-pulse" />
            </div>
          </div>
          <p className="text-white/60 font-medium tracking-wide animate-pulse">
            Accessing Portal...
          </p>
        </div>
      </div>
    );
  }

  // Determine which icon to show
  const getIcon = () => {
    switch (roleParam) {
      case "admin": return <User size={28} />;
      case "teacher": return <School size={28} />;
      case "parent": return <Users size={28} />;
      default: return <GraduationCap size={28} />;
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Element (consistent with home page) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-500/20 to-yellow-400/10 blur-[100px] opacity-50 pointer-events-none"></div>

      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="relative bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 min-w-[400px] border border-white/10"
        >
          {/* Logo & Title Section */}
          <div className="flex flex-col items-center text-center gap-4 mb-4">
            <div className="flex items-center gap-2 group cursor-pointer mb-2">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all">
                <GraduationCap className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-white/90 font-light text-xl tracking-tighter">Bini's</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 font-bold text-xl tracking-tighter">School</span>
              </div>
            </div>

            <h2 className="text-white/60 text-sm font-medium tracking-wide uppercase">
              {displayRole ? `Log in to ${displayRole} Portal` : "Sign in to your account"}
            </h2>
          </div>

          <Clerk.GlobalError className="text-sm text-red-400 bg-red-500/10 p-3 rounded-xl border border-red-500/20" />

          <div className="space-y-5">
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] ml-1">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                placeholder="Enter your username"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-yellow-400/50 outline-none transition-all hover:bg-white/10"
              />
              <Clerk.FieldError className="text-xs text-red-400 mt-1" />
            </Clerk.Field>

            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] ml-1">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                placeholder="••••••••"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-yellow-400/50 outline-none transition-all hover:bg-white/10"
              />
              <Clerk.FieldError className="text-xs text-red-400 mt-1" />
            </Clerk.Field>
          </div>

          <SignIn.Action
            submit
            className="w-full bg-yellow-400 text-black mt-4 rounded-2xl p-4 font-bold hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-yellow-400/10"
          >
            Sign In {displayRole ? `as ${displayRole}` : ""}
            <div className="p-1 bg-black text-white rounded-full transition-transform group-hover:translate-x-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </div>
          </SignIn.Action>

          <p className="text-center text-white/30 text-xs mt-2">
            Forgot your password? <span className="text-white/60 hover:text-yellow-400 cursor-pointer transition-colors">Contact Support</span>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

// Wrap in Suspense to avoid de-opting entire page to client-side rendering with no fallback
const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading login...</div>}>
      <LoginPageContent />
    </Suspense>
  )
}

export default LoginPage;

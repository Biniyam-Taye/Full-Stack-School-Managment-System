import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { LogOut } from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "home",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent", "guest"],
      },
      {
        icon: "teacher",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher", "student", "guest"],
      },
      {
        icon: "student",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher", "student", "guest"],
      },
      {
        icon: "parent",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher", "student", "guest"],
      },
      {
        icon: "subject",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "class",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher", "student", "guest"],
      },
      {
        icon: "lesson",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher", "student", "guest"],
      },
      {
        icon: "exam",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "assignment",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "result",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "attendance",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "event",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "message",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "announcement",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "profile",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "setting",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "logout",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = async () => {
  let user;
  try {
    user = await currentUser();
  } catch (err) {
    console.error("Error fetching user in Menu:", err);
  }

  const role = (user?.publicMetadata.role as string) || "guest";
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-1" key={i.title}>
          <span className="hidden lg:flex items-center gap-2 text-gray-400 font-bold my-4 text-[10px] uppercase tracking-widest">
            <span className="h-px w-4 bg-gradient-to-r from-lamaSky to-transparent"></span>
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              if (item.label === "Logout") {
                return (
                  <SignOutButton redirectUrl="/sign-in" key={item.label}>
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-3 md:px-4 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all duration-300 cursor-pointer group">
                      <LogOut size={22} className="opacity-50 group-hover:opacity-100 transition-all duration-300" />
                      <span className="hidden lg:block font-medium tracking-wide group-hover:translate-x-1 transition-transform">Logout</span>
                    </div>
                  </SignOutButton>
                );
              }
              return <SidebarItem item={item} key={item.label} />;
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];
  
  return (
    <div className="fixed top-0 z-40 w-full   px-4 py-3 backdrop-blur-2xl">
      <div className="flex justify-center items-center w-full space-x-1 sm:space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`relative px-2 py-1 transition-colors ${
              pathname === item.path
                ? "text-primary dark:text-primary-400 font-bold "
                : "hover:font-bold "
            }`}
          >
            {item.name}
            {/* Animated underline */}
            {pathname === item.path && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary dark:bg-primary-400 rounded-full origin-left animate-underline" />
            )}
          </Link>
        ))}
        <ThemeSwitch />
      </div>
    </div>
  );
}

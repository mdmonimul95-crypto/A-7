"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart2 } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/timeline", label: "Timeline", icon: Clock },
  { href: "/stats", label: "Stats", icon: BarChart2 },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-base-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="font-display text-xl font-bold text-base-content">
            KeenKeeper
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-2">
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-neutral text-white"
                      : "text-gray-500 hover:text-base-content"
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
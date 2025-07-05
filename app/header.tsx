"use client";

import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
    return (
        <header className="w-full border-b sticky top-0 bg-white z-50">
            <div className="mx-auto flex items-center justify-between px-6 py-3">
                {/* Left - Logo */}
                <div className="flex items-center gap-2">
                    <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
                </div>

                {/* Center - Navigation */}
                <nav className="hidden md:flex gap-6 text-sm text-gray-800 font-medium">
                    <span>About</span>
                    <span>Posts</span>
                </nav>

                {/* Right */}
                <div className="flex items-center gap-4 text-sm">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

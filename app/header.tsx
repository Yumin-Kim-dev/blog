"use client";

import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b sticky top-0 bg-background z-50">
            <div className="mx-auto flex items-center justify-between px-6 py-3">
                {/* Left - Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
                    </Link>
                </div>

                {/* Center - Navigation */}
                <nav className="hidden md:flex gap-6 text-sm text-foreground font-medium">
                    <Link href="/about"><span>About</span></Link>
                    {/*<Link href="/posts"><span>Posts</span></Link>*/}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-4 text-sm">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

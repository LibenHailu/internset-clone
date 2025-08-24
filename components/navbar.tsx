"use client";

import Link from "next/link";

import { navigationLinks } from "@/lib/navigation-links";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname()
    return (
        <>
            {navigationLinks?.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn("text-foreground/80 hover:text-primary sm:flex items-center h-full", pathname === item.href && "text-primary")}
                    prefetch={false}
                >
                    {item.label}
                </Link>
            ))}
        </>
    );
}

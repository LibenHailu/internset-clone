"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/navigation-links";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="grid gap-4 p-4 mt-4">
          {navigationLinks?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-foreground/80 hover:text-primary md:flex items-center h-full",
                pathname === item.href && "text-primary"
              )}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

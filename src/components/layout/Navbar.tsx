"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/demo">
              <Button variant="ghost" size="sm">
                View Demo
              </Button>
            </Link>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
                    <Sprout className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    {siteConfig.name}
                  </span>
                </Link>

                <nav className="flex flex-col gap-4">
                  {navigation.main.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-600 transition-colors hover:text-green-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Link href="/demo" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      View Demo
                    </Button>
                  </Link>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Sprout, ChevronDown, Layers, Droplets, Activity, FileText, Monitor, CloudSun, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ElementType> = {
  "Démonstration": Monitor,
  "Gestion des Exploitations": Layers,
  "Rapports Intelligents": FileText,
  "Irrigation Intelligente": Droplets,
  "Monitoring & Alertes": Activity,
  "Station Météo": CloudSun,
  "Drone Fertilisation": Plane,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

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
              item.name === "Services" ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
                  >
                    {item.name}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  
                  {/* Dropdown */}
                  <div className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200",
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 min-w-[240px]">
                      {navigation.services.map((service) => {
                        const Icon = serviceIcons[service.name] || Layers;
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-green-50 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                              <Icon className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">
                              {service.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/demo">
              <Button variant="ghost" size="sm">
                Voir Démo
              </Button>
            </Link>
            <Button size="sm" className="bg-green-700 hover:bg-green-800">
              Nous Contacter
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
                    item.name === "Services" ? (
                      <div key={item.name} className="space-y-2">
                        <span className="text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-green-200">
                          {navigation.services.map((service) => {
                            const Icon = serviceIcons[service.name] || Layers;
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon className="w-4 h-4" />
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-600 transition-colors hover:text-green-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Link href="/demo" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Voir Démo
                    </Button>
                  </Link>
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Nous Contacter
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

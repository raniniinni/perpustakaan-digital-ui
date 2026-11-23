
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Katalog Digital", href: "/catalog" },
  { label: "Profil & Layanan", href: "/about" },
  { label: "Kontak & Bantuan", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-2xl font-bold tracking-tight text-indigo-700"
        >
          TemuPustaka
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive
                    ? "text-indigo-700"
                    : "text-gray-600 hover:text-indigo-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Menu Mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-indigo-50 lg:hidden"
        >
          <span className="text-2xl">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Navigasi Mobile */}
      {isMenuOpen && (
        <nav className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  activeRoute?: string;
}

export default function Header({
  activeRoute = "discover",
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Discover", href: "/", key: "discover" },
    { label: "Koleksi", href: "/catalog", key: "catalog" },
    {
      label: "Rekomendasi",
      href: "/recommendations",
      key: "recommendations",
    },
    {
      label: "My Library",
      href: "/my-library",
      key: "my-library",
    },
    { label: "Akun", href: "/account", key: "account" },
    { label: "Bantuan", href: "/help", key: "help" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-indigo-700"
          onClick={() => setIsMenuOpen(false)}
        >
          TemuPustaka
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={
                activeRoute === item.key ? "page" : undefined
              }
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                activeRoute === item.key
                  ? "text-indigo-700"
                  : "text-gray-700 hover:text-indigo-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Tombol Masuk Desktop */}
        <button
          type="button"
          className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 lg:block"
        >
          Masuk
        </button>

        {/* Tombol Hamburger Mobile dan Tablet */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 hover:bg-indigo-50 lg:hidden"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Menu Mobile dan Tablet */}
      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={
                  activeRoute === item.key ? "page" : undefined
                }
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeRoute === item.key
                    ? "bg-indigo-50 text-indigo-800"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-800"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 w-full rounded-lg bg-indigo-600 px-4 py-3 text-left text-sm font-medium text-white hover:bg-indigo-700"
            >
              Masuk
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

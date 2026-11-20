
import Link from "next/link";

interface HeaderProps {
  activeRoute?: string;
}

export default function Header({
  activeRoute = "discover",
}: HeaderProps) {
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
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo Produk */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-700"
        >
          TemuPustaka
        </Link>

        {/* Navigasi Utama */}
        <nav className="flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-medium ${
                activeRoute === item.key
                  ? "text-indigo-700"
                  : "text-gray-600 hover:text-indigo-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Tombol Masuk */}
        <button
          type="button"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Masuk
        </button>

      </div>
    </header>
  );
}


"use client";

import { useState, type ChangeEvent } from "react";

interface SearchBarProps {
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  onSearchChange,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Menangkap setiap perubahan input pengguna
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = e.target.value;

    // Menyimpan teks asli yang diketik pengguna
    setSearchTerm(rawValue);

    // Normalisasi input sesuai Postel's Law
    const normalizedQuery = rawValue.trim().toLowerCase();

    // Mengirim kata kunci ke halaman katalog
    onSearchChange(normalizedQuery);
  };

  // Menghapus seluruh teks pencarian
  const handleClear = () => {
    setSearchTerm("");
    onSearchChange("");
  };

  return (
    <div className="relative my-6 w-full max-w-xl">

      {/* Label untuk Screen Reader */}
      <label
        htmlFor="catalog-search"
        className="sr-only"
      >
        Cari judul buku, penulis, atau kategori
      </label>

      {/* Kolom Pencarian */}
      <input
        id="catalog-search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Cari judul buku, penulis, atau kategori..."
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-24 text-slate-900 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      {/* Tombol Bersihkan */}
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Bersihkan pencarian"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200"
        >
          Bersihkan
        </button>
      )}

    </div>
  );
}


"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";

// Data koleksi TemuPustaka
const catalogData = [
  {
    id: 1,
    title: "Dasar-Dasar Desain Antarmuka Pengguna",
    author: "Nadia Putri",
    category: "UI/UX",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Arsitektur Informasi Perpustakaan Digital",
    author: "Rizky Pratama",
    category: "Perpustakaan Digital",
    isAvailable: false,
  },
  {
    id: 3,
    title: "Metodologi Penelitian Ilmu Perpustakaan",
    author: "Aulia Rahman",
    category: "Penelitian",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Panduan Pengelolaan Perpustakaan Digital",
    author: "Siti Maharani",
    category: "Perpustakaan Digital",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Literasi Informasi di Era Digital",
    author: "Dimas Saputra",
    category: "Literasi Informasi",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Pengantar Ilmu Perpustakaan",
    author: "Ratna Puspita",
    category: "Ilmu Perpustakaan",
    isAvailable: false,
  },
  {
    id: 7,
    title: "Manajemen Koleksi Perpustakaan Modern",
    author: "Fajar Nugraha",
    category: "Manajemen Perpustakaan",
    isAvailable: true,
  },
  {
    id: 8,
    title: "Dasar-Dasar Pemrograman Web",
    author: "Aditya Prakoso",
    category: "Teknologi Informasi",
    isAvailable: true,
  },
  {
    id: 9,
    title: "User Experience untuk Pemula",
    author: "Nabila Azzahra",
    category: "UI/UX",
    isAvailable: false,
  },
  {
    id: 10,
    title: "Metadata dan Dublin Core",
    author: "Putri Amelia",
    category: "Metadata",
    isAvailable: true,
  },
  {
    id: 11,
    title: "Sistem Otomasi Perpustakaan dengan SLiMS",
    author: "Rendra Wijaya",
    category: "Sistem Informasi",
    isAvailable: true,
  },
  {
    id: 12,
    title: "Metode Penelitian Kualitatif",
    author: "Maya Anggraini",
    category: "Penelitian",
    isAvailable: false,
  },
  {
    id: 13,
    title: "Teknologi Informasi dalam Layanan Perpustakaan",
    author: "Arif Setiawan",
    category: "Teknologi Informasi",
    isAvailable: true,
  },
];

export default function CatalogPage() {
  // State untuk menyimpan hasil filter katalog
  const [filteredCatalog, setFilteredCatalog] = useState(catalogData);

  // Fungsi pencarian koleksi buku
  const handleSearchChange = (query: string) => {
    if (!query) {
      setFilteredCatalog(catalogData);
      return;
    }

    // Filter berdasarkan judul, penulis, dan kategori
    const results = catalogData.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );

    setFilteredCatalog(results);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">

        {/* Judul Halaman */}
        <div className="mb-10">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-700">
            TEMUPUSTAKA
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Katalog Digital
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Temukan berbagai buku, jurnal, dan sumber referensi digital
            yang sesuai dengan kebutuhan belajar dan penelitianmu.
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="mb-10 flex flex-wrap gap-3">
          <Button
            label="Jelajahi Koleksi"
            variant="primary"
          />

          <Button
            label="Lihat Kategori"
            variant="secondary"
          />
        </div>

        {/* Kolom Pencarian */}
        <SearchBar onSearchChange={handleSearchChange} />

        {/* Informasi Koleksi */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Jelajahi Koleksi
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Berbagai referensi pilihan tersedia untukmu.
            </p>
          </div>

          <span
            className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
            aria-live="polite"
          >
            {filteredCatalog.length} dari {catalogData.length} Koleksi
          </span>
        </div>

        {/* Grid Koleksi */}
        {filteredCatalog.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {filteredCatalog.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                isAvailable={book.isAvailable}
              />
            ))}

          </div>
        ) : (
          /* Pesan ketika koleksi tidak ditemukan */
          <div
            className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center"
            role="status"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              Buku yang kamu cari tidak ditemukan.
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Coba gunakan kata kunci lain untuk menemukan koleksi
              yang sesuai.
            </p>
          </div>
        )}

        {/* Informasi Tambahan */}
        <div className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-indigo-900">
            Temukan Referensi yang Sesuai
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-800">
            Jelajahi koleksi TemuPustaka berdasarkan bidang dan topik
            yang ingin kamu pelajari. Gunakan informasi koleksi untuk
            menemukan referensi yang tepat.
          </p>
        </div>

      </section>
    </main>
  );
}
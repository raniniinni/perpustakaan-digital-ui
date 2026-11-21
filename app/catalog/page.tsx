
import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Button from "@/components/Button";

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
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <Header activeRoute="catalog" />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Judul Halaman */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-indigo-700">
            TEMUPUSTAKA
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Temukan Koleksi Pilihanmu
          </h1>

          <p className="mt-2 text-gray-700">
            Jelajahi berbagai sumber referensi sesuai kebutuhanmu.
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="mb-8 flex flex-wrap gap-3">
          <Button
            label="Jelajahi Koleksi"
            variant="primary"
          />

          <Button
            label="Lihat Kategori"
            variant="secondary"
          />
        </div>

        {/* Daftar Koleksi */}
        <h2 className="mb-5 text-xl font-bold text-gray-900">
          Rekomendasi Koleksi
        </h2>

        {/* Grid Responsif Tailwind CSS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {catalogData.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              isAvailable={book.isAvailable}
            />
          ))}

        </div>

      </section>
    </main>
  );
}

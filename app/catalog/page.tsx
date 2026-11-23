
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

          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            {catalogData.length} Koleksi
          </span>
        </div>

        {/* Grid Koleksi */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

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

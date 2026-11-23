
import Link from "next/link";

const categories = [
  {
    name: "Desain UI/UX",
    description: "Desain antarmuka dan pengalaman pengguna",
    icon: "🎨",
  },
  {
    name: "Perpustakaan Digital",
    description: "Literasi dan pengelolaan informasi digital",
    icon: "📚",
  },
  {
    name: "Penelitian",
    description: "Metode dan referensi penelitian",
    icon: "🔬",
  },
  {
    name: "Teknologi",
    description: "Inovasi dan perkembangan teknologi",
    icon: "💻",
  },
];

const recommendations = [
  {
    title: "Dasar-Dasar Desain Antarmuka Pengguna",
    category: "UI/UX",
    author: "Nadia Putri",
    status: "Tersedia",
  },
  {
    title: "Arsitektur Informasi Perpustakaan Digital",
    category: "Perpustakaan Digital",
    author: "Rizky Pratama",
    status: "Dipinjam",
  },
  {
    title: "Metodologi Penelitian Ilmu Perpustakaan",
    category: "Penelitian",
    author: "Aulia Rahman",
    status: "Tersedia",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1 bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">

          <div className="max-w-3xl">

            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Perpustakaan Digital TemuPustaka
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Beranda
            </h1>

            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Temukan Referensi yang Kamu Butuhkan
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Jelajahi berbagai buku, jurnal, dan sumber informasi
              digital berdasarkan kebutuhan belajar dan penelitianmu.
            </p>

            {/* Search Area */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg shadow-indigo-100/60">
              <div className="flex flex-col gap-3 sm:flex-row">

                <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <span className="text-xl">🔍</span>
                  <span className="text-sm text-gray-400">
                    Cari buku, topik, atau penulis...
                  </span>
                </div>

                <Link
                  href="/catalog"
                  className="rounded-xl bg-indigo-600 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Cari Referensi
                </Link>

              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Temukan referensi yang sesuai dengan kebutuhanmu.
            </p>

          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Jelajahi Berdasarkan Kategori
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Pilih bidang yang ingin kamu pelajari.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <Link
              key={category.name}
              href="/catalog"
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                {category.icon}
              </div>

              <h3 className="mt-5 font-bold text-slate-900 group-hover:text-indigo-700">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.description}
              </p>
            </Link>
          ))}

        </div>
      </section>

      {/* Recommendation Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Rekomendasi Koleksi
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Referensi pilihan untuk mendukung kegiatan belajarmu.
              </p>
            </div>

            <Link
              href="/catalog"
              className="text-sm font-semibold text-indigo-700 hover:text-indigo-900"
            >
              Lihat Semua Koleksi →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {recommendations.map((book) => (
              <article
                key={book.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-44 items-center justify-center bg-indigo-50">
                  <span className="text-6xl">📚</span>
                </div>

                <div className="p-5">

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {book.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        book.status === "Tersedia"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {book.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Penulis: {book.author}
                  </p>

                  <Link
                    href="/catalog"
                    className="mt-5 inline-block text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                  >
                    Jelajahi Katalog →
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl bg-indigo-700 px-6 py-12 text-center sm:px-12">

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Siap Menemukan Referensi Favoritmu?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-100">
            Mulai jelajahi berbagai koleksi digital dan temukan
            sumber informasi yang sesuai dengan kebutuhanmu.
          </p>

          <Link
            href="/catalog"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Jelajahi Katalog
          </Link>

        </div>
      </section>

    </main>
  );
}

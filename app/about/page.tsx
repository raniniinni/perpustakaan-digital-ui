
import Link from "next/link";

const services = [
  {
    icon: "🔎",
    title: "Pencarian Referensi",
    description:
      "Membantu pengguna menemukan buku dan sumber informasi berdasarkan topik atau kebutuhan belajar.",
  },
  {
    icon: "📚",
    title: "Katalog Digital",
    description:
      "Menjelajahi berbagai koleksi referensi digital berdasarkan kategori dan bidang yang diminati.",
  },
  {
    icon: "⭐",
    title: "Rekomendasi Koleksi",
    description:
      "Menampilkan pilihan referensi yang dapat membantu pengguna menemukan bahan bacaan.",
  },
  {
    icon: "📖",
    title: "Informasi Koleksi",
    description:
      "Menyediakan informasi mengenai judul, penulis, kategori, dan ketersediaan koleksi.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex-1 bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-700">
            MENGENAL TEMUPUSTAKA
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Profil & Layanan
          </h1>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-indigo-700 sm:text-4xl">
            Temukan Informasi, Perluas Pengetahuan
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            TemuPustaka merupakan platform perpustakaan digital
            yang dirancang untuk membantu pengguna menemukan buku,
            referensi, dan sumber informasi sesuai kebutuhan belajar
            maupun penelitian.
          </p>

          <Link
            href="/catalog"
            className="mt-7 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Jelajahi Katalog
          </Link>

        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">

          <div>
            <span className="text-sm font-semibold text-indigo-700">
              TENTANG KAMI
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              Satu Tempat untuk Menemukan Berbagai Referensi
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              TemuPustaka hadir sebagai sarana penelusuran informasi
              digital yang memberikan kemudahan bagi pengguna dalam
              mencari dan menjelajahi berbagai sumber referensi.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Melalui tampilan yang sederhana dan pengelompokan
              koleksi berdasarkan kategori, pengguna dapat
              menelusuri bahan bacaan dengan lebih terarah
              sesuai topik yang ingin dipelajari.
            </p>
          </div>

          <div className="flex min-h-64 items-center justify-center rounded-3xl bg-indigo-100 p-10">
            <div className="text-center">
              <div className="text-7xl">📚</div>

              <h3 className="mt-5 text-2xl font-bold text-indigo-800">
                TemuPustaka
              </h3>

              <p className="mt-2 text-sm text-indigo-700">
                Temukan Referensi yang Kamu Butuhkan
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div className="mb-10 text-center">
            <span className="text-sm font-semibold text-indigo-700">
              LAYANAN TEMUPUSTAKA
            </span>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Apa yang Bisa Kamu Temukan?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Berbagai fitur untuk membantu proses pencarian dan
              penjelajahan referensi digital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl bg-indigo-700 px-6 py-12 text-center sm:px-12">

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Mulai Temukan Referensimu
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-100">
            Jelajahi koleksi TemuPustaka dan temukan sumber informasi
            yang mendukung kebutuhan belajarmu.
          </p>

          <Link
            href="/catalog"
            className="mt-7 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Lihat Katalog Digital
          </Link>

        </div>
      </section>

    </main>
  );
}

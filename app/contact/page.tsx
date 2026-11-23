
import Link from "next/link";

const helpItems = [
  {
    icon: "🔎",
    question: "Bagaimana cara menemukan buku?",
    answer:
      "Buka halaman Katalog Digital untuk menjelajahi berbagai koleksi berdasarkan kategori dan kebutuhan referensimu.",
  },
  {
    icon: "📚",
    question: "Apa saja koleksi yang tersedia?",
    answer:
      "TemuPustaka menyediakan informasi koleksi berupa buku dan referensi digital dari berbagai bidang pembelajaran.",
  },
  {
    icon: "📖",
    question: "Bagaimana mengetahui ketersediaan koleksi?",
    answer:
      "Periksa informasi status pada kartu koleksi untuk mengetahui apakah koleksi tersedia atau sedang dipinjam.",
  },
  {
    icon: "💡",
    question: "Apa fungsi TemuPustaka?",
    answer:
      "TemuPustaka membantu pengguna menemukan dan menjelajahi referensi digital sesuai topik yang ingin dipelajari.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex-1 bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">

          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-700">
            PUSAT INFORMASI
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Kontak & Bantuan
          </h1>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-indigo-700 sm:text-4xl">
            Ada yang Bisa Kami Bantu?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Temukan jawaban atas pertanyaanmu mengenai TemuPustaka,
            mulai dari pencarian referensi hingga informasi koleksi
            perpustakaan digital.
          </p>

        </div>
      </section>

      {/* Help Center */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="mb-10">
          <span className="text-sm font-semibold text-indigo-700">
            PUSAT BANTUAN
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Berikut beberapa informasi yang dapat membantu
            kamu menggunakan layanan TemuPustaka.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {helpItems.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.answer}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">

            <div>
              <span className="text-sm font-semibold text-indigo-700">
                HUBUNGI KAMI
              </span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Butuh Informasi Lebih Lanjut?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Apabila kamu memiliki pertanyaan atau membutuhkan
                informasi tambahan mengenai koleksi dan layanan
                TemuPustaka, silakan menghubungi pengelola melalui
                kanal komunikasi resmi perpustakaan.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Informasi kontak resmi dapat ditambahkan pada bagian
                ini sesuai dengan kanal komunikasi yang tersedia.
              </p>
            </div>

            <div className="rounded-3xl bg-indigo-50 p-8 sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
                💬
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Kami Siap Membantu
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Jelajahi halaman TemuPustaka untuk mendapatkan
                informasi mengenai berbagai koleksi dan referensi
                digital yang tersedia.
              </p>

              <Link
                href="/catalog"
                className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Kunjungi Katalog Digital
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="rounded-3xl bg-indigo-700 px-6 py-10 text-center sm:px-12">

          <h2 className="text-2xl font-bold text-white">
            Temukan Referensi dengan Lebih Mudah
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-100">
            Mulai perjalanan pencarian informasi dan perluas
            pengetahuanmu bersama TemuPustaka.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Kembali ke Beranda
          </Link>

        </div>
      </section>

    </main>
  );
}

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  isAvailable: boolean;
}

export default function BookCard({
  title,
  author,
  category,
  isAvailable,
}: BookCardProps) {
  return (
    <article className="rounded-xl border border-gray-300 bg-white p-5 shadow-sm">

      {/* Sampul Buku */}
      <div className="mb-4 flex h-36 items-center justify-center rounded-lg bg-indigo-50">
        <span className="text-5xl">📚</span>
      </div>

      {/* Kategori dan Status */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">

        {/* Badge Kategori */}
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-900">
          {category}
        </span>

        {/* Badge Status Buku */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            isAvailable
              ? "bg-green-100 text-green-900"
              : "bg-red-100 text-red-900"
          }`}
        >
          {isAvailable ? "Tersedia" : "Dipinjam"}
        </span>

      </div>

      {/* Informasi Koleksi */}
      <h2 className="mb-2 text-lg font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-sm text-gray-700">
        Penulis: {author}
      </p>

    </article>
  );
}

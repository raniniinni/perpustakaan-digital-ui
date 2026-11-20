
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
    <article className="rounded-xl border bg-white p-5 shadow-sm">

      {/* Sampul Buku */}
      <div className="mb-4 flex h-36 items-center justify-center rounded-lg bg-indigo-50">
        <span className="text-5xl">📚</span>
      </div>

      {/* Kategori dan Status */}
      <div className="mb-3 flex items-center justify-between gap-2">

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          {category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isAvailable ? "Tersedia" : "Dipinjam"}
        </span>

      </div>

      {/* Informasi Koleksi */}
      <h2 className="mb-2 text-lg font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-sm text-gray-500">
        Penulis: {author}
      </p>

    </article>
  );
}


interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  variant = "primary",
}: ButtonProps) {

  const baseStyle =
    "rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors";

  const variantStyle =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button
      type="button"
      className={`${baseStyle} ${variantStyle}`}
    >
      {label}
    </button>
  );
}
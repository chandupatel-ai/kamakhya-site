export default function PlaceholderImg({
  label,
  className = "",
  variant = "default",
}: {
  label?: string;
  className?: string;
  variant?: "default" | "light" | "dark";
}) {
  const gradients = {
    default: "from-gold-light to-gold-dark",
    light: "from-ivory to-gold-light",
    dark: "from-charcoal to-black",
  };

  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br ${gradients[variant]} overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
      {label && (
        <span className="relative font-display text-black/60 text-sm md:text-base px-3 text-center">
          {label}
        </span>
      )}
    </div>
  );
}

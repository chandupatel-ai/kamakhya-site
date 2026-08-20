export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-black text-ivory section-pad">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-ivory/60 text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

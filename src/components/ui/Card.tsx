type CardProps = {
  title: string;
  description: string;
  titleId: string;
  regionId: string;
  currentIndex: number;
  total: number;
};

export function Card({
  title,
  description,
  titleId,
  regionId,
  currentIndex,
  total,
}: CardProps) {
  return (
    <article
      id={regionId}
      className="rounded-2xl border border-slate-700 bg-slate-800/60 p-8 min-h-48 flex flex-col justify-between"
      aria-labelledby={titleId}
      aria-live="polite"
      aria-atomic="true"
    >
      <div>
        <h3 id={titleId} className="text-2xl font-semibold text-orange-400">
          {title}
        </h3>
        <p className="mt-4 text-lg text-slate-200">{description}</p>
      </div>

      <p className="sr-only">
        Servicio {currentIndex + 1} de {total}.
      </p>
    </article>
  );
}

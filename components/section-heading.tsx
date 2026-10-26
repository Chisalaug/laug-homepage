export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-line/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mono-label flex items-center gap-2.5 text-accent-strong">
          <span>{index}</span>
          <span className="h-px w-7 bg-accent/45" aria-hidden />
          <span>{eyebrow}</span>
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-6 text-ink-soft">
        {description}
      </p>
    </div>
  );
}

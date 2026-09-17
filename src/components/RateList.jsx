import { Link } from "react-router-dom";
import { pkr } from "../data/studio";

export default function RateList({ category, showHeader = true }) {
  return (
    <div>
      {showHeader && (
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ivory sm:text-3xl">
              {category.name}
            </h3>
            <p className="mt-1 max-w-md text-sm text-ivory/50">{category.tagline}</p>
          </div>
          <Link
            to={`/services?category=${category.id}`}
            className="text-xs font-bold uppercase tracking-[0.18em] text-champagne transition-colors hover:text-gold"
          >
            View all →
          </Link>
        </div>
      )}

      <ul className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-obsidian/60 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        {category.items.map((item) => (
          <li key={item.id}>
            <Link
              to={`/services/${item.id}`}
              className="group flex items-center justify-between gap-4 rounded-xl px-3 py-4 transition-colors duration-300 hover:bg-gold/[0.06] sm:px-5"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate font-medium text-ivory/90 transition-colors group-hover:text-champagne">
                    {item.name}
                  </p>
                  {item.featured && (
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-ivory/40">
                  {item.duration}
                  {item.blurb ? ` · ${item.blurb}` : ""}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="font-serif text-lg font-semibold text-gold-gradient">
                  {pkr(item.price)}
                </span>
                <p className="text-[10px] uppercase tracking-[0.15em] text-ivory/35 transition-opacity group-hover:text-gold/70">
                  View details →
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
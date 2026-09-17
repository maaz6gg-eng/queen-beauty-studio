import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(212,175,55,0.45)]">
        <Crown className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl font-semibold tracking-wide text-ivory">
          Queen Beauty
        </span>
        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.34em] text-champagne/75">
          Studio
        </span>
      </span>
    </Link>
  );
}
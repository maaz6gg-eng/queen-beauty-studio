import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-all duration-300";

const variants = {
  gold: `${base} btn-shine bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b18b26] text-espresso shadow-gold hover:-translate-y-0.5 hover:shadow-[0_16px_55px_-10px_rgba(212,175,55,0.6)]`,
  outline: `${base} hairline bg-transparent text-champagne hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/10`,
  ghost: `${base} border border-transparent text-ivory/80 hover:text-gold`,
};

export default function Button({ to, href, onClick, variant = "gold", className = "", children }) {
  const cls = `${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
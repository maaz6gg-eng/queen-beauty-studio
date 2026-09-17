import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { img } from "../data/studio";

export default function PageHero({
  image,
  eyebrow,
  title,
  highlight,
  sub,
  crumbs = [],
  imageClass = "",
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-24 lg:pt-48">
      <motion.div
        initial={{ scale: 1.1, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={img(image, 2000)} alt="" className={`h-full w-full object-cover ${imageClass}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/70 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {crumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45"
          >
            {crumbs.map((c, i) =>
              c.to ? (
                <span key={c.label} className="flex items-center gap-1.5">
                  <Link to={c.to} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-gold/50" />
                </span>
              ) : (
                <span key={c.label} className="text-gold">
                  {c.label}
                </span>
              )
            )}
          </motion.nav>
        )}

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-cursive text-4xl text-gold-gradient sm:text-5xl"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-3xl font-serif text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
        >
          {title} {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ivory/60"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
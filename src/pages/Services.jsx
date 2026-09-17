import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Check,
  Crown,
  Droplets,
  Feather,
  Gem,
  Hand,
  Leaf,
  Scissors,
  Sparkles,
} from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import RateList from "../components/RateList";
import Button from "../components/Button";
import { CATEGORIES, featuredPackages, img, pkr } from "../data/studio";

const categoryIcons = {
  makeup: Brush,
  facial: Leaf,
  hair: Scissors,
  "mani-pedi": Hand,
  waxing: Droplets,
  threading: Feather,
};

const packageIcons = {
  makeup: Crown,
  hair: Sparkles,
};

function PackageSpotlights() {
  return (
    <section className="relative pb-4 lg:pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="font-cursive text-3xl text-gold-gradient">Signature Packages</span>
            <h2 className="font-serif text-4xl font-semibold text-ivory sm:text-5xl">
              Two Royal Offers, <span className="italic text-gold-gradient">One Glow</span>
            </h2>
            <p className="max-w-xl text-sm text-ivory/55">
              Our two most-loved complete experiences — curated, all-inclusive and worth every
              rupee.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {featuredPackages.map((pkg, i) => {
            const Icon = packageIcons[pkg.category.id] || Gem;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-gold/25 bg-obsidian shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img(
                      pkg.category.id === "makeup"
                        ? "photo-1487412720507-e7ab37603c6f"
                        : "photo-1562322140-8baeececf3df",
                      900
                    )}
                    alt={pkg.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-espresso/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
                    <Sparkles className="h-3 w-3" /> {pkg.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-ivory sm:text-3xl">
                      {pkg.name}
                    </h3>
                    <Icon className="h-7 w-7 shrink-0 text-gold/70" strokeWidth={1.4} />
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-sm leading-relaxed text-ivory/60">{pkg.blurb}</p>
                  <ul className="space-y-2">
                    {pkg.category.include.slice(0, 3).map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-[13px] text-ivory/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <div>
                      <p className="font-serif text-3xl font-semibold text-gold-gradient">
                        {pkr(pkg.price)}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-ivory/40">
                        {pkg.duration} · includes everything
                      </p>
                    </div>
                    <Link
                      to={`/services/${pkg.id}`}
                      className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6ca65] to-[#b18b26] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-espresso shadow-gold transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category") || "";
  const initial = CATEGORIES.some((c) => c.id === requested) ? requested : "facial";
  const [active, setActive] = useState(initial);
  const activeCat = CATEGORIES.find((c) => c.id === active);

  const selectCategory = (id) => {
    setActive(id);
    if (id !== "facial") {
      setSearchParams({ category: id }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  return (
    <PageShell>
      <PageHero
        image="photo-1600948836101-f9ffda59d250"
        eyebrow="Our Services"
        title="A Complete"
        highlight="Beauty Destination"
        sub="Six categories, one standard of care. Browse our full rate card, filter by service and book the ritual that's right for you."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="relative pb-16">
        <PackageSpotlights />
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 sm:justify-center">
              {CATEGORIES.map((cat) => {
                const Icon = categoryIcons[cat.id];
                return (
                  <button
                    key={cat.id}
                    onClick={() => selectCategory(cat.id)}
                    className={`relative flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      active === cat.id
                        ? "bg-gradient-to-r from-[#e6ca65] to-[#b18b26] text-espresso shadow-gold"
                        : "hairline text-ivory/55 hover:border-gold/35 hover:text-gold"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat.short}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <div className="relative overflow-hidden rounded-3xl border border-gold/20">
                <img
                  src={activeCat.image}
                  alt={activeCat.name}
                  className="h-60 w-full object-cover sm:h-72"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/20" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="font-serif text-4xl font-semibold text-ivory sm:text-5xl">
                    {activeCat.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-ivory/65">{activeCat.description}</p>
                </div>
              </div>
              <div className="mt-8">
                <RateList category={activeCat} showHeader={false} />
              </div>
            </motion.div>
          </AnimatePresence>

          <Reveal className="mt-14">
            <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-gold/20 bg-gradient-to-r from-gold/[0.07] via-transparent to-gold/[0.07] p-8 text-center sm:p-10">
              <p className="font-cursive text-3xl text-gold-gradient">Still deciding?</p>
              <h3 className="max-w-xl font-serif text-3xl font-semibold leading-snug text-ivory sm:text-4xl">
                Chat with us and we'll hand-pick your{" "}
                <span className="italic text-gold-gradient">perfect ritual</span>
              </h3>
              <Button to="/contact" variant="outline">
                Get Personal Recommendations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
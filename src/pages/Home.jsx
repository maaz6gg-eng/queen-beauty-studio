import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Brush,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Droplets,
  Feather,
  Flower2,
  Gem,
  Hand,
  HeartHandshake,
  Leaf,
  MapPin,
  MessagesSquare,
  Phone,
  Quote,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import RateList from "../components/RateList";
import BeforeAfter from "../components/BeforeAfter";
import {
  BRAND,
  CATEGORIES,
  GALLERY,
  PROCESS,
  STATS,
  TESTIMONIALS,
  WHY_US,
  img,
  pkr,
} from "../data/studio";

const categoryIcons = {
  makeup: Brush,
  facial: Leaf,
  hair: Scissors,
  "mani-pedi": Hand,
  waxing: Droplets,
  threading: Feather,
};

const whyIcons = { award: Award, gem: Gem, shield: ShieldCheck, crown: Crown };
const processIcons = { messages: MessagesSquare, sparkles: Sparkles, heart: HeartHandshake };

const fromPrice = (cat) => Math.min(...cat.items.map((i) => i.price));

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden sm:items-center">
      <motion.div
        initial={{ scale: 1.12, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={img("photo-1580618672591-eb180b1a973f", 2000)}
          alt="Luxury beauty studio interior"
          className="h-full w-full object-cover"
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/40 to-transparent" />
      </motion.div>

      <div className="radial-gold pointer-events-none absolute inset-x-0 top-0 h-80" />

      <Flower2
        className="pointer-events-none absolute right-[8%] top-28 hidden h-10 w-10 animate-float text-gold/25 lg:block"
        strokeWidth={1}
      />
      <Sparkles
        className="pointer-events-none absolute left-[6%] top-40 hidden h-8 w-8 animate-float-slow text-champagne/25 lg:block"
        strokeWidth={1}
      />

      <div className="pointer-events-none absolute top-[22%] right-[6%] z-10 hidden animate-float xl:block">
        <div className="glass-dark hairline flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-card">
          <BadgeCheck className="h-5 w-5 text-gold" />
          <div>
            <p className="text-xs font-bold text-ivory">Certified Artists</p>
            <p className="text-[10px] text-ivory/55">Trained & experienced</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-[46%] right-[12%] z-10 hidden animate-float-slow xl:block">
        <div className="glass-dark hairline flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-card">
          <ShieldCheck className="h-5 w-5 text-gold" />
          <div>
            <p className="text-xs font-bold text-ivory">100% Hygienic</p>
            <p className="text-[10px] text-ivory/55">Single-use kits</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 sm:pb-28 lg:pb-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-cursive text-4xl text-gold-gradient sm:text-5xl"
          >
            Your Beauty Our Priority
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-serif text-6xl font-semibold leading-[1.02] tracking-tight text-ivory sm:text-7xl lg:text-8xl"
          >
            Where Beauty
            <br />
            Meets <span className="text-gold-gradient italic">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/65 sm:text-base"
          >
            Luxury threading, facials, hair rituals, nails and royal bridal artistry — crafted in
            the heart of Kot Abdul Malik so every visit leaves you looking good and feeling better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button to="/services">
              Explore Rate List <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="outline">
              Book Appointment
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.95 }}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {["AK", "FR", "MS", "ZT"].map((n, i) => (
                <span
                  key={n}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-espresso bg-gradient-to-br from-[#e6ca65] to-[#8a6d1f] text-[10px] font-bold text-espresso"
                >
                  {n}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </div>
              <p className="mt-1 text-xs text-ivory/50">
                Trusted by 5,000+ women across Lahore
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold/70 transition-colors hover:text-gold md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function StatsStrip() {
  return (
    <section id="stats" className="relative border-y border-gold/12 bg-obsidian">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-serif text-5xl font-semibold text-gold-gradient">{s.value}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/50">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutSnippet() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={img("photo-1562322140-8baeececf3df", 800)}
              alt="Hair treatment in the studio"
              className="h-72 w-full rounded-3xl border border-gold/15 object-cover shadow-card sm:h-80"
              loading="lazy"
            />
            <img
              src={img("photo-1540555700478-4be289fbecef", 800)}
              alt="Relaxing spa atmosphere"
              className="mt-10 h-72 w-full rounded-3xl border border-gold/15 object-cover shadow-card sm:h-80"
              loading="lazy"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="glass-dark hairline absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-2xl px-7 py-5 text-center shadow-card"
          >
            <p className="font-cursive text-2xl text-gold-gradient">Beauty + Confidence + You</p>
          </motion.div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Studio Built Around"
            highlight="One Queen at a Time"
            sub="In the heart of Kot Abdul Malik, Queen Beauty Studio was founded on a simple belief — luxury care should belong to every woman. Today our artists welcome brides, mothers, sisters and friends for rituals that blend premium products with genuine, unhurried attention."
          />
          <div className="mt-8 space-y-4">
            {[
              "Expert artists trained in modern & traditional beauty rituals",
              "Premium, skin-friendly products — nothing cheap touches you",
              "A spotless, hygienic studio with single-use service kits",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 0.1}>
                <div className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-obsidian/50 p-4">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                    <Crown className="h-4 w-4" />
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ivory/70">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-9">
              <Button to="/about" variant="outline">
                More About Us <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="relative bg-obsidian py-24 lg:py-32">
      <div className="radial-gold pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Rituals for Every"
          highlight="Kind of Beauty"
          sub="From a quick brow refresh to full bridal glam — every treatment is designed around your skin, your hair and your day."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const Icon = categoryIcons[cat.id];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/services?category=${cat.id}`}
                  className="group relative block h-80 overflow-hidden rounded-3xl border border-white/[0.06] shadow-card transition-all duration-500 hover:border-gold/35 hover:shadow-[0_24px_70px_-24px_rgba(212,175,55,0.35)]"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/35 to-espresso/10 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/35 bg-espresso/70 text-gold backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory transition-colors group-hover:text-champagne">
                      {cat.name}
                    </h3>
                    <p className="mt-1 truncate text-[13px] text-ivory/60">{cat.tagline}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                        From {pkr(fromPrice(cat))}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/55 transition-colors group-hover:text-gold">
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Queen Beauty"
          title="Four Pillars of Our"
          highlight="Promise"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w, i) => {
            const Icon = whyIcons[w.icon];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-obsidian/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-gold"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/[0.07] blur-2xl transition-all duration-500 group-hover:bg-gold/[0.16]" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                </span>
                <h3 className="relative mt-5 font-serif text-2xl font-semibold text-ivory">
                  {w.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-ivory/55">{w.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const [active, setActive] = useState(CATEGORIES[1].id);
  const activeCat = CATEGORIES.find((c) => c.id === active);

  return (
    <section className="relative bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Rate List"
          title="Transparent Pricing,"
          highlight="Premium Care"
          sub="Peek at our signature rate card — honest prices, zero surprises. The full list lives on our services page."
        />

        <Reveal className="mt-12">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 sm:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                  active === cat.id
                    ? "bg-gradient-to-r from-[#e6ca65] to-[#b18b26] text-espresso shadow-gold"
                    : "hairline text-ivory/55 hover:border-gold/35 hover:text-gold"
                }`}
              >
                {cat.short}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <RateList category={activeCat} showHeader={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal className="mt-10 text-center">
          <Button to="/services" variant="outline">
            View Full Rate List <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Experience"
          title="Your Journey,"
          highlight="Steps of Gold"
          sub="Every appointment follows a considered rhythm — from the first hello to the final mirror check."
        />
        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
          {PROCESS.map((p, i) => {
            const Icon = processIcons[p.icon];
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/30 bg-obsidian text-gold shadow-gold">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                  <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-r from-[#e6ca65] to-[#b18b26] font-serif text-sm font-bold text-espresso">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ivory">{p.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ivory/55">
                  {p.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Transformations"
          title="Real Women,"
          highlight="Real Royalty"
          sub="Drag the slider to preview the kind of transformation our artists craft every single week."
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <BeforeAfter />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-gold/20 bg-espresso/60 p-7">
              <Quote className="h-8 w-8 text-gold/50" />
              <p className="mt-4 font-serif text-2xl leading-snug text-ivory/90">
                "Every bride who leaves our chair walks out a little taller. That moment — the first
                mirror check — is why we do this."
              </p>
              <p className="mt-5 text-sm font-semibold text-gold">The Queen Beauty Team</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.src + i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] text-left ${g.span || ""}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <p className="text-sm font-medium text-ivory">{g.caption}</p>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 bg-espresso/60 text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close gallery"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length);
              }}
              className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i + 1) % GALLERY.length);
              }}
              className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-gold/25 shadow-card"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY[active].src}
                alt={GALLERY[active].caption}
                className="max-h-[80vh] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/95 to-transparent p-5">
                <p className="font-serif text-xl text-champagne">{GALLERY[active].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = (d) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="radial-gold pointer-events-none absolute inset-x-0 bottom-0 h-80" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by the"
          highlight="Women We Serve"
        />
        <Reveal className="relative mt-14">
          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 70 : -70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -70 : 70 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? "fill-gold" : "fill-gold/20 text-gold/20"}`} />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-2xl leading-relaxed text-ivory/90 sm:text-3xl">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-serif text-xl font-semibold text-champagne">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/45">
                    {t.service}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            aria-label="Previous testimonial"
            onClick={() => paginate(-1)}
            className="absolute -left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/25 bg-obsidian/70 text-gold transition-all hover:bg-gold/10 max-sm:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
            className="absolute -right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold/25 bg-obsidian/70 text-gold transition-all hover:bg-gold/10 max-sm:hidden"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === index ? "w-8 bg-gold" : "w-2 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-[#2b1f12] via-obsidian to-espresso px-6 py-14 shadow-card sm:px-12 lg:px-16">
            <div className="pointer-events-none absolute inset-0">
              <img
                src={img("photo-1469334031218-e382a71b716b", 1600)}
                alt="Editorial beauty portrait"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/70 to-espresso/40" />
            </div>
            <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="font-cursive text-4xl text-gold-gradient">Look Good, Feel Better</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
                  Your Appointment Is
                  <br />
                  <span className="text-gold-gradient italic">One Call Away</span>
                </h2>
                <div className="mt-7 flex flex-wrap items-center gap-5 sm:gap-8">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ivory">Kot Abdul Malik</p>
                      <p className="text-xs text-ivory/50">{BRAND.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <Flower2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ivory">Open Daily</p>
                      <p className="text-xs text-ivory/50">10 AM – 9 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 lg:w-auto">
                <a
                  href={BRAND.phoneTel}
                  className="btn-shine inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b18b26] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-espresso shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-10px_rgba(212,175,55,0.65)]"
                >
                  <Phone className="h-4.5 w-4.5" /> Call {BRAND.phoneDisplay}
                </a>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full hairline px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-champagne transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StatsStrip />
      <AboutSnippet />
      <FeaturedServices />
      <WhyUs />
      <PricingPreview />
      <Process />
      <Gallery />
      <Testimonials />
      <ContactCTA />
    </PageShell>
  );
}
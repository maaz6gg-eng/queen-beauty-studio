import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  Check,
  Clock,
  Crown,
  Flame,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import BookingWidget from "../components/BookingWidget";
import { BRAND, HOURS, findService, pkr, rawId } from "../data/studio";

export default function ServiceDetail() {
  const { itemId } = useParams();
  const service = findService(itemId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const cat = service.category;

  return (
    <PageShell>
      <PageHero
        image={rawId(cat.image)}
        eyebrow={cat.tagline}
        title={service.name}
        highlight={service.featured ? `— ${service.badge} Package` : ""}
        sub={service.blurb}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: cat.short, to: `/services?category=${cat.id}` },
          { label: service.name },
        ]}
      />

      <section className="relative pb-24 lg:pb-32">
        <div className="radial-gold pointer-events-none absolute inset-x-0 top-0 h-72" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-r from-[#e6ca65] to-[#b18b26] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-espresso">
                    {cat.name}
                  </span>
                  <span className="hairline flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-ivory/70">
                    <Clock className="h-3.5 w-3.5 text-gold" /> {service.duration}
                  </span>
                  <span className="hairline flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-ivory/70">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 4.9 rating
                  </span>
                  {service.featured && (
                    <span className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                      <Sparkles className="h-3.5 w-3.5" /> {service.badge}
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap items-end gap-5 rounded-3xl border border-gold/20 bg-gradient-to-r from-gold/[0.08] via-transparent to-gold/[0.08] p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/45">
                      Investment
                    </p>
                    <p className="mt-1 font-serif text-5xl font-semibold text-gold-gradient">
                      {pkr(service.price)}
                    </p>
                  </div>
                  <p className="max-w-xs pb-1 text-sm leading-relaxed text-ivory/55">
                    No hidden charges — this includes every step of the ritual and premium products.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <h2 className="mt-12 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                  About this treatment
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ivory/60">{cat.description}</p>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-12 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                  What's included
                </h2>
              </Reveal>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cat.include.map((inc, i) => (
                  <motion.div
                    key={inc}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-obsidian/50 p-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="pt-1 text-sm text-ivory/70">{inc}</p>
                  </motion.div>
                ))}
              </div>

              <Reveal>
                <h2 className="mt-12 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                  The treatment journey
                </h2>
              </Reveal>
              <div className="relative mt-7 space-y-3 before:absolute before:bottom-5 before:left-[27px] before:top-5 before:w-px before:bg-gradient-to-b before:from-gold/60 before:via-gold/20 before:to-transparent">
                {cat.procedure.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-start gap-5"
                  >
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/35 bg-obsidian font-serif text-lg font-bold text-gold shadow-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="rounded-2xl border border-white/[0.06] bg-obsidian/50 p-5">
                      <p className="text-sm leading-relaxed text-ivory/75">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Reveal>
                <h2 className="mt-12 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                  Aftercare tips
                </h2>
              </Reveal>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cat.aftercare.map((tip, i) => {
                  const Icon = i % 2 === 0 ? ShieldCheck : Sparkles;
                  return (
                    <motion.div
                      key={tip}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-3 rounded-2xl border border-gold/12 bg-espresso/60 p-4"
                    >
                      <span className="mt-0.5 text-gold">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </span>
                      <p className="text-sm leading-relaxed text-ivory/65">{tip}</p>
                    </motion.div>
                  );
                })}
              </div>

              {service.featured && (
                <Reveal>
                  <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/[0.1] to-transparent p-7 sm:flex-row sm:items-center sm:p-9">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <Crown className="h-7 w-7" strokeWidth={1.4} />
                    </span>
                    <div>
                      <p className="font-cursive text-3xl text-gold-gradient">
                        The Queen's signature
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-ivory">
                        Booked by our most-loved clients, season after season.
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ivory/60">
                        Slots for {service.name} fill quickly around weddings — we recommend
                        reserving your date at least two weeks ahead.
                      </p>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <BookingWidget defaultServiceId={service.id} />

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-white/[0.06] bg-obsidian/60 p-6">
                  <h3 className="font-serif text-xl font-semibold text-ivory">Quick connect</h3>
                  <div className="mt-4 space-y-3">
                    <a
                      href={BRAND.phoneTel}
                      className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] p-3.5 transition-colors hover:border-gold/35"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                        <Phone className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ivory/90 group-hover:text-champagne">
                          {BRAND.phoneDisplay}
                        </p>
                        <p className="text-[11px] text-ivory/45">Tap to call</p>
                      </div>
                    </a>
                    <a
                      href={BRAND.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] p-3.5 transition-colors hover:border-gold/35"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                        <Award className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ivory/90 group-hover:text-champagne">
                          WhatsApp us
                        </p>
                        <p className="text-[11px] text-ivory/45">Fastest reply, 10 AM – 9 PM</p>
                      </div>
                    </a>
                    <a
                      href={BRAND.mapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] p-3.5 transition-colors hover:border-gold/35"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                        <MapPin className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ivory/90 group-hover:text-champagne">
                          {BRAND.location}
                        </p>
                        <p className="text-[11px] text-ivory/45">Open in maps</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-white/[0.06] bg-obsidian/60 p-6">
                  <h3 className="font-serif text-xl font-semibold text-ivory">Opening hours</h3>
                  <ul className="mt-4 space-y-2.5">
                    {HOURS.map((row) => (
                      <li
                        key={row.days}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="text-ivory/55">{row.days}</span>
                        <span className="font-medium text-champagne/90">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-2xl bg-gold/[0.07] p-3.5 text-xs leading-relaxed text-ivory/55">
                    <Quote className="mb-1 h-4 w-4 text-gold/60" />
                    Walk-ins welcome, but bridal dates are reserved — book yours today.
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          <Reveal>
            <div className="mt-16">
              <h2 className="font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                More in <span className="italic text-gold-gradient">{cat.name}</span>
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items
                  .filter((item) => item.id !== service.id)
                  .map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={`/services/${item.id}`}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-obsidian/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold"
                      >
                        <div>
                          <p className="font-medium text-ivory/85 transition-colors group-hover:text-champagne">
                            {item.name}
                          </p>
                          <div className="mt-1 flex items-center gap-3 text-xs text-ivory/40">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-gold/60" /> {item.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame className="h-3 w-3 text-gold/60" /> {pkr(item.price)}
                            </span>
                          </div>
                        </div>
                        <span className="font-serif text-xl text-gold transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
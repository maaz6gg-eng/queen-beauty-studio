import { motion } from "framer-motion";
import { Crown, Gem, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { ABOUT_GALLERY, ABOUT_VALUES, STATS, img } from "../data/studio";

const valueIcons = { shield: ShieldCheck, gem: Gem, sparkles: Sparkles, crown: Crown };

export default function About() {
  return (
    <PageShell>
      <PageHero
        image="photo-1580618672591-eb180b1a973f"
        eyebrow="Our Story"
        title="Crafted for the Woman"
        highlight="Who Wants It All"
        sub="A boutique luxury studio in Kot Abdul Malik — built on artistry, hygiene and the belief that every appointment should feel like a celebration of you."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="relative py-24 lg:py-28">
        <div className="radial-gold pointer-events-none absolute inset-x-0 top-0 h-72" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Story & Vision"
              title="From a Single Chair to a"
              highlight="Studio of Queens"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ivory/60">
                Queen Beauty Studio began with one beautician's chair, a set of premium brushes and
                a promise that the women of Kot Abdul Malik deserved the same luxury care found in
                the grand salons of the city. Today that promise lives across six signature
                services — from a fifteen-minute brow thread to a full-day bridal transformation.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-[15px] leading-relaxed text-ivory/60">
                Our vision is simple: beauty that builds confidence. We never rush a ritual, we
                never dilute a product and we never treat a client like a number on a booking list.
                Every guest walks in as a visitor and leaves as family — glowing inside and out.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {STATS.slice(0, 3).map((s, i) => (
                <Reveal key={s.label} delay={0.2 + i * 0.08}>
                  <div className="rounded-2xl border border-white/[0.06] bg-obsidian/50 p-4 text-center transition-all duration-300 hover:border-gold/30">
                    <p className="font-serif text-3xl font-semibold text-gold-gradient">{s.value}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ivory/45">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img("photo-1522335789203-aabd1fc54bc9", 700)}
                alt="Artist working with a client"
                className="h-80 w-full rounded-3xl border border-gold/15 object-cover shadow-card"
                loading="lazy"
              />
              <img
                src={img("photo-1487412947147-5cebf100ffc2", 700)}
                alt="Makeup artistry in action"
                className="mt-10 h-80 w-full rounded-3xl border border-gold/15 object-cover shadow-card"
                loading="lazy"
              />
            </div>
            <div className="glass-dark hairline absolute -bottom-6 right-4 rounded-2xl px-6 py-4 shadow-card">
              <p className="font-cursive text-2xl text-gold-gradient">Every woman is royal</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-obsidian py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Values"
            title="The Standards We"
            highlight="Never Compromise"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_VALUES.map((v, i) => {
              const Icon = valueIcons[v.icon];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-3xl border border-white/[0.06] bg-espresso/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-gold"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ivory">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ivory/55">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="The Atmosphere"
                title="Step Into Your"
                highlight="Glow"
                sub="Warm light, curated scents, soft music and tools that gleam. The studio is designed to feel less like a salon and more like a ritual room — your hour of quiet indulgence away from everything else."
              />
              <Reveal delay={0.12}>
                <div className="mt-8 flex items-end gap-3">
                  <HeartHandshake className="h-8 w-8 text-gold/60" strokeWidth={1.3} />
                  <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
                    "We designed every corner — even the mirror lighting is placed to flatter. When
                    you sit in our chair, you get the best of us."
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9">
                  <Button to="/services" variant="outline">
                    Explore Our Services
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ABOUT_GALLERY.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] ${
                    i % 2 === 1 ? "mt-8" : ""
                  } ${i === 1 || i === 3 ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                >
                  <img
                    src={src}
                    alt="Queen Beauty Studio atmosphere"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-obsidian to-espresso px-6 py-14 text-center shadow-card sm:px-12">
              <Sparkles className="pointer-events-none absolute left-8 top-8 h-8 w-8 animate-float text-gold/25" strokeWidth={1} />
              <Sparkles className="pointer-events-none absolute bottom-8 right-8 h-6 w-6 animate-float-slow text-gold/25" strokeWidth={1} />
              <p className="font-cursive text-4xl text-gold-gradient">Beauty + Confidence + You</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
                Ready to feel like the woman{" "}
                <span className="text-gold-gradient italic">you already are?</span>
              </h2>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button to="/contact">Book Your Visit</Button>
                <Button to="/services" variant="outline">
                  See the Rate List
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
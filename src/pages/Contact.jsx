import { Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import BookingWidget from "../components/BookingWidget";
import { BRAND, HOURS, img } from "../data/studio";

const connectCards = [
  {
    Icon: Phone,
    label: "Call us directly",
    value: BRAND.phoneDisplay,
    hint: "Tap to call — we answer quickly",
    href: BRAND.phoneTel,
    cta: "Call now",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp booking",
    value: "Send a message",
    hint: "Fastest way to reserve a slot",
    href: BRAND.whatsappLink,
    cta: "Open WhatsApp",
  },
  {
    Icon: MapPin,
    label: "Visit the studio",
    value: BRAND.location,
    hint: "Kot Abdul Malik, Lahore",
    href: BRAND.mapsLink,
    cta: "Get directions",
  },
];

export default function Contact() {
  return (
    <PageShell>
      <PageHero
        image="photo-1559599101-f09722fb4948"
        eyebrow="Get In Touch"
        title="Reserve Your"
        highlight="Moment of Glam"
        sub="A call, a message or a visit — however you reach us, your booking is confirmed personally by our team within minutes during working hours."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="relative pb-24 lg:pb-32">
        <div className="radial-gold pointer-events-none absolute inset-x-0 top-0 h-72" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div className="space-y-6">
              {connectCards.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.08}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-5 rounded-3xl border border-white/[0.06] bg-obsidian/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold"
                  >
                    <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <c.Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ivory/40">
                        {c.label}
                      </p>
                      <p className="mt-1 truncate font-serif text-2xl font-semibold text-ivory transition-colors group-hover:text-champagne">
                        {c.value}
                      </p>
                      <p className="mt-0.5 text-xs text-ivory/45">{c.hint}</p>
                    </div>
                    <span className="shrink-0 rounded-full hairline px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-champagne transition-colors group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-gold">
                      {c.cta}
                    </span>
                  </a>
                </Reveal>
              ))}

              <Reveal delay={0.24}>
                <div className="rounded-3xl border border-white/[0.06] bg-obsidian/60 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-semibold text-ivory">Working hours</h3>
                    <span className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                      <Clock className="h-3 w-3" /> Open today
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {HOURS.map((row) => (
                      <li
                        key={row.days}
                        className="flex items-center justify-between border-b border-white/[0.05] pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-ivory/55">{row.days}</span>
                        <span className="font-medium text-champagne/90">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-2 rounded-2xl bg-gold/[0.07] p-3.5 text-xs text-ivory/55">
                    <Star className="h-4 w-4 shrink-0 fill-gold text-gold" />
                    Rated 4.9 by 5,000+ happy clients across Lahore.
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-card">
                  <iframe
                    title="Queen Beauty Studio location — Kot Abdul Malik"
                    src={BRAND.mapsEmbed}
                    className="h-72 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-espresso to-transparent p-4 pt-12">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-espresso/80 text-gold">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold text-ivory">{BRAND.location}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <BookingWidget />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 grid gap-6 rounded-[2rem] border border-gold/20 bg-gradient-to-r from-gold/[0.08] via-transparent to-gold/[0.08] p-8 sm:p-10 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <p className="font-cursive text-3xl text-gold-gradient">Planning a bridal season?</p>
                <h3 className="mt-2 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                  Book your bridal trial and first-day package together — save the fuss, not the
                  glamour.
                </h3>
              </div>
              <a
                href={BRAND.phoneTel}
                className="btn-shine inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b18b26] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-espresso shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-10px_rgba(212,175,55,0.65)]"
              >
                <Phone className="h-4.5 w-4.5" /> {BRAND.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <div className="mt-16 flex justify-center">
            <img
              src={img("photo-1604654894610-df63bc536371", 1400)}
              alt="Elegant manicure service at Queen Beauty Studio"
              className="hidden h-56 w-full max-w-4xl rounded-[2rem] border border-gold/15 object-cover shadow-card lg:block"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
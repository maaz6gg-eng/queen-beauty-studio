import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";
import { BRAND, HOURS, NAV_LINKS } from "../data/studio";

const quickLinks = [
  ...NAV_LINKS,
  { to: "/services?category=makeup", label: "Bridal Makeup" },
  { to: "/services?category=hair", label: "Hair Treatments" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-obsidian">
      <div className="radial-gold pointer-events-none absolute inset-x-0 top-0 h-64" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
              A luxury beauty studio in Kot Abdul Malik — threading, facials, hair, nails, waxing
              and bridal artistry crafted around one promise: your beauty, our priority.
            </p>
            <p className="font-cursive text-2xl text-gold-gradient">Beauty + Confidence + You</p>
            <div className="flex items-center gap-3 pt-1">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ivory/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:text-gold hover:shadow-[0_8px_24px_-6px_rgba(212,175,55,0.5)]"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
              <a
                href={BRAND.whatsappLink}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ivory/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:text-gold hover:shadow-[0_8px_24px_-6px_rgba(212,175,55,0.5)]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide text-ivory">Explore</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to + l.label}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-sm text-ivory/55 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-4 bg-gold/30 transition-all duration-300 group-hover:w-6 group-hover:bg-gold" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide text-ivory">
              Working Hours
            </h4>
            <ul className="mt-5 space-y-4">
              {HOURS.map((row) => (
                <li key={row.days} className="flex items-start gap-3 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                  <div>
                    <p className="font-medium text-ivory/80">{row.days}</p>
                    <p className="text-ivory/45">{row.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ivory/35">Walk-ins welcome, appointments preferred.</p>
          </div>

          <div className="space-y-5">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-ivory">
              Visit Our Studio
            </h4>
            <a
              href={BRAND.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-sm text-ivory/55 transition-colors hover:text-gold"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
              {BRAND.location}
            </a>
            <a
              href={BRAND.phoneTel}
              className="flex items-center gap-3 text-sm text-ivory/55 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold/70" />
              {BRAND.phoneDisplay}
            </a>

            <div className="rounded-2xl border border-gold/15 bg-espresso/60 p-4">
              <p className="text-sm font-medium text-ivory/85">Join the Queen's list</p>
              <p className="mt-1 text-xs leading-relaxed text-ivory/45">
                Offers, bridal season tips and new service previews — no spam.
              </p>
              {subscribed ? (
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-champagne">
                  <Check className="h-4 w-4" /> You're on the list, welcome.
                </p>
              ) : (
                <form
                  className="mt-3 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="field py-2.5 text-xs"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="btn-shine grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-r from-[#e6ca65] to-[#b18b26] text-espresso transition-transform hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Queen Beauty Studio. All rights reserved.
          </p>
          <p className="font-cursive text-xl text-gold-gradient">Look Good, Feel Better</p>
        </div>
      </div>
    </footer>
  );
}
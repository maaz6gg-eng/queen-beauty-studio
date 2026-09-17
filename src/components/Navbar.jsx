import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { BRAND, NAV_LINKS } from "../data/studio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-3 w-full max-w-7xl px-4 sm:mt-4 sm:px-6"
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled || open ? "glass-dark hairline shadow-card" : "border border-transparent"
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive ? "text-gold" : "text-ivory/75 hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={BRAND.phoneTel}
              className="flex items-center gap-2 text-[12px] font-semibold tracking-wider text-champagne/85 transition-colors hover:text-gold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/25 bg-gold/10">
                <Phone className="h-3.5 w-3.5" />
              </span>
              {BRAND.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b18b26] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-espresso shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-8px_rgba(212,175,55,0.6)]"
            >
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl hairline text-gold lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden lg:hidden"
            >
              <div className="glass-dark hairline shadow-card rounded-2xl p-4">
                <div className="flex flex-col">
                  {NAV_LINKS.map((l, i) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-white/5 py-3.5 font-serif text-lg transition-colors ${
                          isActive ? "text-gold" : "text-ivory/85"
                        }`
                      }
                    >
                      <span>{l.label}</span>
                      <span className="font-cursive text-xl text-gold/70">0{i + 1}</span>
                    </NavLink>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={BRAND.phoneTel}
                    className="flex items-center justify-center gap-2 rounded-full hairline py-3 text-sm font-semibold text-champagne"
                  >
                    <Phone className="h-4 w-4" /> {BRAND.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="btn-shine flex items-center justify-center rounded-full bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b18b26] py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-espresso"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
import { useState } from "react";
import { CalendarDays, Check, Clock, Heart, Phone, Send } from "lucide-react";
import { ALL_SERVICES, BRAND, TIME_SLOTS, fireWhatsapp } from "../data/studio";

const today = () => new Date().toISOString().split("T")[0];

export default function BookingWidget({ defaultServiceId = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultServiceId,
    date: today(),
    time: "",
    notes: "",
  });
  const [done, setDone] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const service = ALL_SERVICES.find((s) => s.id === form.service);
    window.open(
      fireWhatsapp({ ...form, service: service ? service.name : form.service }),
      "_blank",
      "noopener,noreferrer"
    );
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-gold/25 bg-gradient-to-b from-gold/[0.08] to-transparent p-8 text-center shadow-card">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-ivory">
          Request received, Queen!
        </h3>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ivory/55">
          Your booking details are open in WhatsApp — press send and we'll confirm your slot
          shortly.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={BRAND.phoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-full hairline px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-champagne transition-all hover:bg-gold/10"
          >
            <Phone className="h-4 w-4" /> {BRAND.phoneDisplay}
          </a>
          <button
            onClick={() => setDone(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6ca65] to-[#b18b26] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-espresso transition-transform hover:scale-[1.03]"
          >
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-gold/25 bg-obsidian/80 p-6 shadow-card backdrop-blur sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-ivory">Book Your Appointment</h3>
          <p className="mt-1 text-sm text-ivory/50">We confirm every request personally.</p>
        </div>
        <Heart className="h-6 w-6 shrink-0 text-gold/60" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-name" className="label">
            Your Name
          </label>
          <input
            id="bk-name"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Ayesha Khan"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="bk-phone" className="label">
            Phone / WhatsApp
          </label>
          <input
            id="bk-phone"
            required
            type="tel"
            pattern="[0-9+\s-]{10,15}"
            value={form.phone}
            onChange={set("phone")}
            placeholder="03XX XXXXXXX"
            className="field"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="bk-service" className="label">
            Choose a Service
          </label>
          <select id="bk-service" required value={form.service} onChange={set("service")} className="field">
            <option value="" disabled className="bg-obsidian text-ivory/60">
              Select a service…
            </option>
            {ALL_SERVICES.map((s) => (
              <option key={s.id} value={s.id} className="bg-obsidian text-ivory">
                {s.name} — {s.category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="bk-date" className="label">
            Preferred Date
          </label>
          <input
            id="bk-date"
            required
            type="date"
            min={today()}
            value={form.date}
            onChange={set("date")}
            className="field [color-scheme:dark]"
          />
        </div>
        <div>
          <label htmlFor="bk-time" className="label">
            Preferred Time
          </label>
          <select id="bk-time" required value={form.time} onChange={set("time")} className="field">
            <option value="" disabled className="bg-obsidian text-ivory/60">
              Choose a time…
            </option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t} className="bg-obsidian text-ivory">
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="bk-notes" className="label">
            Notes (optional)
          </label>
          <textarea
            id="bk-notes"
            rows={3}
            value={form.notes}
            onChange={set("notes")}
            placeholder="Skin type, bridal occasion, references…"
            className="field resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-shine mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b18b26] py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-espresso shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_55px_-10px_rgba(212,175,55,0.6)]"
      >
        <Send className="h-4 w-4" /> Request via WhatsApp
      </button>

      <div className="mt-4 flex items-center justify-center gap-5 text-[11px] text-ivory/40">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5 text-gold/60" /> Instant confirmation
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-gold/60" /> 10 AM – 9 PM daily
        </span>
      </div>
    </form>
  );
}
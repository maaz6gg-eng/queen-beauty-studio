import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { BEFORE_AFTER, img } from "../data/studio";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] max-h-[560px] w-full select-none overflow-hidden rounded-3xl border border-gold/20 shadow-card sm:aspect-[16/10]">
      <img
        src={BEFORE_AFTER.after}
        alt="After transformation — radiant bridal glam"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <img
        src={BEFORE_AFTER.before}
        alt="Before transformation — natural salon look"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        loading="lazy"
      />

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-espresso/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory/90 backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#e6ca65] to-[#b18b26] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-espresso">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-gold shadow-[0_0_16px_rgba(212,175,55,0.8)]" />
        <div className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-obsidian/85 text-gold shadow-gold backdrop-blur">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, highlight, sub, align = "center" }) {
  const alignCls = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="font-cursive text-3xl text-gold-gradient">{eyebrow}</span>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-gold-gradient italic">{highlight}</span>
        )}
      </h2>
      {sub && (
        <p className={`max-w-2xl text-[15px] leading-relaxed text-ivory/55 ${align === "left" ? "" : "mx-auto"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
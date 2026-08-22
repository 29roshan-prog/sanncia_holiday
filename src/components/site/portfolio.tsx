import { useEffect, useState } from "react";
import { X } from "lucide-react";
import group from "@/assets/gal-group.webp";
import honeymoon from "@/assets/gal-honeymoon.webp";
import resort from "@/assets/gal-resort.webp";
import mice from "@/assets/mice.webp";
import kerala from "@/assets/dest-kerala.webp";
import dubai from "@/assets/dest-dubai.webp";
import ladakh from "@/assets/dest-ladakh.webp";
import cruise from "@/assets/dest-cruise.webp";
import jaipur from "@/assets/dest-jaipur.webp";
import holyland from "@/assets/gal-holyland-2019.webp";
import { Reveal } from "./reveal";

type Shot = { img: string; alt: string; category: string; span: string };

/**
 * Placeholder photography. Replace each entry with real Sanncia Holiday
 * customer/trip photographs when they are supplied.
 */
const SHOTS: Shot[] = [
  {
    img: group,
    alt: "Group of travellers at a mountain viewpoint on a Sanncia Holiday trip",
    category: "Customer Group Trips",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: holyland,
    alt: "Sanncia Holiday group on the Holy Land trip, 2019",
    category: "Customer Group Trips",
    span: "",
  },
  {
    img: honeymoon,
    alt: "Couple walking along a beach at sunset on a honeymoon trip",
    category: "Honeymoon & Couple Trips",
    span: "md:row-span-2",
  },
  {
    img: mice,
    alt: "Business travellers walking through an airport terminal",
    category: "Corporate Trips",
    span: "",
  },
  { img: resort, alt: "Infinity pool at a luxury beach resort", category: "Hotels & Resorts", span: "" },
  {
    img: dubai,
    alt: "Dubai skyline at night seen on an international trip",
    category: "Travel Experiences",
    span: "md:row-span-2",
  },
  {
    img: kerala,
    alt: "Houseboat cruising the Kerala backwaters",
    category: "Travel Experiences",
    span: "md:col-span-2",
  },
  {
    img: ladakh,
    alt: "Monastery in the mountains of Ladakh",
    category: "Travel Experiences",
    span: "",
  },
  { img: cruise, alt: "Cruise ship at sea at sunset", category: "Travel Experiences", span: "" },
  {
    img: jaipur,
    alt: "Hawa Mahal palace in Jaipur on a domestic tour",
    category: "Airport & Visa Assistance",
    span: "md:col-span-2",
  },
];

const CATEGORIES = [
  "Customer Group Trips",
  "Honeymoon & Couple Trips",
  "Corporate Trips",
  "Hotels & Resorts",
  "Airport & Visa Assistance",
  "Travel Experiences",
];

export function Portfolio() {
  const [active, setActive] = useState<Shot | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="portfolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Travel Portfolio</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Journeys We&apos;ve Helped Create
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            Real trips, planned and managed end to end.{" "}
            <span className="font-semibold text-navy">
              Placeholder photography — to be replaced with Sanncia Holiday customer photographs.
            </span>
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {CATEGORIES.map((c) => (
            <span key={c} className="text-[0.72rem] font-bold tracking-[0.16em] text-navy/60 uppercase">
              {c}
            </span>
          ))}
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {SHOTS.map((s, i) => (
            <button
              key={`${s.category}-${i}`}
              type="button"
              onClick={() => setActive(s)}
              className={`group relative isolate overflow-hidden ${s.span}`}
              aria-label={`View larger image: ${s.alt}`}
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/45"
              />
              <span className="absolute bottom-4 left-4 translate-y-2 text-left text-[0.68rem] font-bold tracking-[0.18em] text-white uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {s.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4 sm:p-10"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid h-12 w-12 place-items-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={active.img}
              alt={active.alt}
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-[0.72rem] font-bold tracking-[0.2em] text-gold uppercase">
              {active.category}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}

export function Gallery() {
  const strip = [group, holyland, resort, dubai, kerala, cruise, ladakh, honeymoon, jaipur];
  return (
    <section aria-label="Travel gallery" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-5 max-w-xl text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.05] font-extrabold text-navy-deep">
            Destinations, stays and moments from the road
          </h2>
        </Reveal>
      </div>
      <div className="no-scrollbar mt-12 flex gap-3 overflow-x-auto px-5 sm:px-8">
        {strip.map((img, i) => (
          <div key={i} className="group relative w-[62vw] shrink-0 overflow-hidden sm:w-[300px]">
            <img
              src={img}
              alt="Sanncia Holiday travel moment"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale-[35%] transition-all duration-[1000ms] group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

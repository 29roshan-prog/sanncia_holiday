import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import bali from "@/assets/dest-bali.webp";
import vietnam from "@/assets/dest-vietnam.webp";
import japan from "@/assets/dest-japan.webp";
import cruise from "@/assets/dest-cruise.webp";
import dubai from "@/assets/dest-dubai.webp";
import paris from "@/assets/dest-paris.webp";
import kerala from "@/assets/dest-kerala.webp";
import jaipur from "@/assets/dest-jaipur.webp";
import ladakh from "@/assets/dest-ladakh.webp";
import { Reveal } from "./reveal";
import { whatsappHref } from "./brand";

const FEATURED = [
  {
    name: "Bali",
    region: "Indonesia",
    img: bali,
    alt: "Temple gate overlooking rice terraces in Bali at sunrise",
    body: "Island temples, rice terraces and quiet beach resorts.",
    season: true,
  },
  {
    name: "Vietnam",
    region: "South East Asia",
    img: vietnam,
    alt: "Traditional boat sailing between limestone karsts in Ha Long Bay, Vietnam",
    body: "Limestone bays, old towns and slow river mornings.",
    season: true,
  },
  {
    name: "Japan",
    region: "East Asia",
    img: japan,
    alt: "Japanese pagoda framed by cherry blossom at dawn",
    body: "Blossom season, bullet trains and mountain ryokans.",
    season: true,
  },
  {
    name: "MSC Cruise",
    region: "Cruise Vacations",
    img: cruise,
    alt: "Luxury cruise ship sailing on the open sea at sunset",
    body: "Multi-country sailings with everything on board.",
    season: true,
  },
  {
    name: "Dubai",
    region: "United Arab Emirates",
    img: dubai,
    alt: "Dubai skyline lit up at blue hour",
    body: "Desert evenings, skyline dining and family days out.",
  },
  {
    name: "Paris",
    region: "France",
    img: paris,
    alt: "Eiffel Tower above Parisian rooftops at sunset",
    body: "Slow boulevards, museums and honeymoon classics.",
  },
  {
    name: "Kerala",
    region: "India",
    img: kerala,
    alt: "Houseboat on the Kerala backwaters at golden hour",
    body: "Backwaters, hill stations and Ayurvedic retreats.",
  },
  {
    name: "Jaipur",
    region: "India",
    img: jaipur,
    alt: "Hawa Mahal palace facade in Jaipur",
    body: "Forts, palaces and the colour of Rajasthan.",
  },
  {
    name: "Leh–Ladakh",
    region: "India",
    img: ladakh,
    alt: "Monastery perched on a mountain ridge in Ladakh",
    body: "High passes, monasteries and open Himalayan skies.",
  },
];

const MORE_DOMESTIC = ["Agra", "Goa", "Delhi", "Varanasi", "Manali–Shimla", "Rishikesh", "Amritsar"];
const MORE_INTERNATIONAL = ["London", "Rome", "Tokyo", "New York", "Bangkok", "Crete", "Istanbul"];

export function Destinations() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 720), behavior: "smooth" });
  };

  return (
    <section id="destinations" className="bg-navy-deep py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal className="max-w-2xl">
            <p className="text-[0.6875rem] font-bold tracking-[0.28em] text-gold uppercase">
              Featured Destinations
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold">
              Where Will Your Next Story Take You?
            </h2>
          </Reveal>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous destinations"
              className="grid h-12 w-12 place-items-center border border-white/25 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next destinations"
              className="grid h-12 w-12 place-items-center border border-white/25 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-8"
      >
        {FEATURED.map((d) => (
          <article
            key={d.name}
            className="group relative isolate w-[78vw] shrink-0 snap-start overflow-hidden sm:w-[420px]"
          >
            <img
              src={d.img}
              alt={d.alt}
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,20,44,0)_35%,rgba(9,20,44,0.85)_100%)]"
            />
            {d.season ? (
              <span className="absolute top-5 left-5 bg-gold px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.2em] text-navy-deep uppercase">
                This Season
              </span>
            ) : null}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[0.66rem] font-semibold tracking-[0.24em] text-gold uppercase">
                {d.region}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">{d.name}</h3>
              <p className="mt-2 max-w-[26ch] text-[0.88rem] leading-relaxed text-white/70">
                {d.body}
              </p>
              <a
                href={whatsappHref(
                  `Hi Sanncia Holiday, I would like to know more about travelling to ${d.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase transition-colors hover:text-gold"
              >
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] gap-10 px-5 sm:px-8 md:grid-cols-2">
        <Reveal>
          <h3 className="text-[0.66rem] font-bold tracking-[0.28em] text-gold uppercase">
            Also across India
          </h3>
          <p className="mt-4 text-lg leading-relaxed font-medium text-white/75">
            {MORE_DOMESTIC.join(" · ")}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="text-[0.66rem] font-bold tracking-[0.28em] text-gold uppercase">
            Also worldwide
          </h3>
          <p className="mt-4 text-lg leading-relaxed font-medium text-white/75">
            {MORE_INTERNATIONAL.join(" · ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

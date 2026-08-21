import {
  BadgeCheck,
  CalendarRange,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  Building2,
  Landmark,
  Layers,
  MapPinned,
  Plane,
  Route,
  Ship,
  ShieldCheck,
  Sparkles,
  Wallet,
  BedDouble,
  Car,
  FileCheck2,
} from "lucide-react";
import aboutImg from "@/assets/about.webp";
import { Reveal } from "./reveal";

const TRUST = [
  { icon: CalendarRange, label: "Since 2019" },
  { icon: Compass, label: "7 Years of Travel Experience" },
  { icon: Globe2, label: "Domestic & International" },
  { icon: Route, label: "Personalised Travel Planning" },
  { icon: BadgeCheck, label: "IATA Travel Agency Accreditation" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why Sanncia Holiday is trusted" className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-border px-0 sm:grid-cols-3 lg:grid-cols-5">
        {TRUST.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col gap-3 bg-white px-6 py-9 last:col-span-2 sm:last:col-span-1"
          >
            <Icon className="h-5 w-5 text-gold-deep" aria-hidden="true" />
            <span className="text-[0.82rem] leading-snug font-semibold text-navy">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:gap-24">
        <Reveal className="relative">
          <img
            src={aboutImg}
            alt="Traveller looking out over a European city at sunrise"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -right-4 -bottom-6 bg-navy px-7 py-6 sm:right-8">
            <p className="text-[0.66rem] font-semibold tracking-[0.28em] text-gold uppercase">
              Founded
            </p>
            <p className="mt-2 text-2xl font-extrabold text-white">2019</p>
            <p className="mt-1 text-[0.78rem] text-white/70">by Monica C</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About Sanncia Holiday</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
              Travel Is More Than A Booking.
              <br />
              <span className="text-gold-deep">It&apos;s An Experience.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
              <p>
                Sanncia Holiday creates tailor-made luxury and budget holiday packages within India
                and around the world. Every itinerary is shaped around the traveller — their pace,
                their interests and their budget.
              </p>
              <p>
                Our goal is to provide a unique and unforgettable travel experience, where each trip
                reflects the traveller&apos;s own desires and interests rather than a fixed
                template.
              </p>
              <p>
                Travel arrangements are personally handled by experienced travel consultants who
                provide service, value and genuine personal attention from the first conversation to
                the final day of the journey.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="#experiences"
              className="mt-9 inline-block border border-navy px-8 py-4 text-[0.78rem] font-bold tracking-[0.14em] text-navy uppercase transition-colors hover:bg-navy hover:text-white"
            >
              Discover Sanncia
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const DIFFERENCE = [
  {
    icon: Route,
    title: "Personalised Planning",
    body: "Trips designed around the traveller's interests, requirements and budget.",
  },
  {
    icon: Layers,
    title: "End-to-End Management",
    body: "Flights, hotels, transfers, visas, itineraries and travel arrangements managed together.",
  },
  {
    icon: Compass,
    title: "Travel Expertise",
    body: "Experienced consultants and deep destination knowledge behind every plan.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    body: "A dedicated approach with support throughout the travel experience.",
  },
];

export function Difference() {
  return (
    <section className="bg-navy-deep py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <p className="text-[0.6875rem] font-bold tracking-[0.28em] text-gold uppercase">
              The Difference
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold">
              We Don&apos;t Just Book Your Trip.
              <br />
              <span className="text-gold">We Manage The Journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="self-end">
            <p className="max-w-lg text-[1.02rem] leading-relaxed text-white/70">
              Unlike agencies that focus primarily on booking services, Sanncia Holiday designs and
              manages the entire travel experience from start to finish — every detail connected,
              nothing left to chance.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENCE.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70} className="group bg-navy-deep p-8 lg:p-10">
              <Icon
                className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <h3 className="mt-8 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-white/65">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: FileCheck2,
    title: "Visa Management Services",
    body: "Documentation guidance, applications and appointment support for domestic and international travellers.",
    featured: true,
  },
  {
    icon: MapPinned,
    title: "Customised Tour Packages",
    body: "Domestic and international itineraries built entirely around your interests, pace and budget.",
    featured: true,
  },
  {
    icon: Plane,
    title: "Flight & Hotel Bookings",
    body: "Domestic and international air ticketing with hand-picked, comfortable accommodation.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Overseas Travel Insurance",
    body: "Cover arranged alongside your itinerary for confident international travel.",
  },
  {
    icon: BedDouble,
    title: "Hotel Bookings",
    body: "Domestic and international stays selected for location, comfort and value.",
  },
  { icon: Ship, title: "Cruise Vacations", body: "Ocean and river cruise holidays, planned end to end." },
  {
    icon: Car,
    title: "Ground Transportation",
    body: "Airport transfers, chauffeur cars and intercity travel arranged in advance.",
  },
  { icon: Wallet, title: "Forex Services", body: "Travel currency and forex support before you fly." },
];

export function Services() {
  return (
    <section id="services" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Everything You Need For A Seamless Journey
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body, featured }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 70}
              className={`group relative overflow-hidden bg-white p-8 transition-colors duration-500 hover:bg-navy lg:p-10 ${
                featured ? "lg:row-span-1" : ""
              }`}
            >
              {featured ? (
                <span className="absolute top-8 right-8 text-[0.6rem] font-bold tracking-[0.22em] text-gold-deep uppercase transition-colors group-hover:text-gold">
                  Most Requested
                </span>
              ) : null}
              <Icon
                className="h-7 w-7 text-navy transition-all duration-500 group-hover:scale-110 group-hover:text-gold"
                aria-hidden="true"
              />
              <h3 className="mt-8 text-lg font-bold text-navy-deep transition-colors group-hover:text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
                {body}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
              />
            </Reveal>
          ))}
          <div aria-hidden="true" className="hidden bg-white lg:block" />
        </div>
      </div>
    </section>
  );
}

const SPECIALISATIONS = [
  {
    icon: Sparkles,
    title: "Custom Holidays",
    body: "Tailor-made domestic and international holidays, designed around you.",
  },
  {
    icon: Landmark,
    title: "Domestic Travel",
    body: "Explore India through personalised itineraries and well-researched routes.",
  },
  {
    icon: Globe2,
    title: "International Travel",
    body: "Curated experiences across the world's most sought-after destinations.",
  },
  {
    icon: Building2,
    title: "Corporate & MICE",
    body: "Meetings, incentives, conferences and events, managed end to end.",
  },
];

const MICE_SERVICES = [
  "Travel arrangements",
  "Accommodation",
  "Conference venues",
  "Sightseeing and excursions",
  "Gala events and entertainment",
  "Activities for companions",
  "Exhibition centres",
  "Pre/post tour services",
];

export function Specialisations() {
  return (
    <section id="experiences" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Specialisations</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Travel Designed Around You
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {SPECIALISATIONS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70} className="border-t-2 border-navy pt-7">
              <Icon className="h-6 w-6 text-gold-deep" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-bold text-navy-deep">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 bg-navy-soft p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
            <div>
              <Handshake className="h-6 w-6 text-gold-deep" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-extrabold text-navy-deep">
                MICE, handled end to end
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                For meetings, incentives, conferences and events, Sanncia Holiday provides complete
                end-to-end services.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {MICE_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[0.92rem] text-navy">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Quote, Star, Target, Compass, Gem } from "lucide-react";
import miceImg from "@/assets/mice.webp";
import ctaImg from "@/assets/cta.webp";
import { Reveal } from "./reveal";
import {
  whatsappHref,
  WhatsAppIcon,
  WHATSAPP_DISPLAY,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  GOOGLE_REVIEWS_URL,
} from "./brand";

/** Package content has not been supplied yet — placeholders only, no invented data. */
const PACKAGES = ["Bali", "Vietnam", "Japan", "MSC Cruise", "Kerala", "Leh–Ladakh"];

export function Packages() {
  return (
    <section id="packages" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Featured Packages</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Your Next Escape Starts Here
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            Itineraries, durations and pricing are confirmed personally by our consultants for each
            traveller.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((name, i) => (
            <Reveal key={name} delay={(i % 3) * 60} className="flex flex-col bg-white p-8 lg:p-10">
              <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-deep uppercase">
                Destination
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-navy-deep">{name}</h3>
              <dl className="mt-7 space-y-3 text-[0.88rem]">
                {["Duration", "Starting price", "Key inclusions", "Best season", "Ideal traveller"].map(
                  (label) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                      <dt className="font-semibold text-navy">{label}</dt>
                      <dd className="text-muted-foreground">—</dd>
                    </div>
                  ),
                )}
              </dl>
              <a
                href={whatsappHref(
                  `Hi Sanncia Holiday, I would like package details for ${name}. Please help me with the details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-navy px-6 py-3.5 text-[0.74rem] font-bold tracking-[0.14em] text-navy uppercase transition-colors hover:bg-navy hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  "Well-researched holidays",
  "Hand-picked experiences",
  "Personalised planning",
  "Destination expertise",
  "English-speaking tour leaders",
  "Small group travel",
  "Comfortable accommodation",
  "Affordable luxury",
  "Inclusive pricing",
  "Dedicated travel team",
  "Stress-free itineraries",
];

export function WhySanncia() {
  return (
    <section className="bg-navy py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.6875rem] font-bold tracking-[0.28em] text-gold uppercase">
            Why Sanncia
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold">
            Why Travellers Choose Sanncia
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal
              as="li"
              key={r}
              delay={(i % 3) * 50}
              className="flex items-baseline gap-4 border-b border-white/12 py-5"
            >
              <span className="text-[0.68rem] font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.02rem] font-medium">{r}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 text-center">
          <p className="text-[clamp(2.4rem,9vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-gold">
            No Stone Unturned.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Mice() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow">Corporate Travel</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Business Travel. Elevated.
          </h2>
          <p className="mt-4 text-lg font-semibold text-gold-deep">
            Explore MICE Tourism Around The Globe
          </p>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-muted-foreground">
            Sanncia Holiday has a dedicated MICE team that works closely with clients from
            conception through execution — aligning logistics, venues and experiences with the
            objective of the event.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {["Meetings", "Incentives", "Conferences", "Events"].map((m) => (
              <div key={m} className="bg-white px-4 py-6 text-center">
                <span className="text-[0.78rem] font-bold tracking-[0.1em] text-navy uppercase">
                  {m}
                </span>
              </div>
            ))}
          </div>
          <a
            href={whatsappHref(
              "Hi Sanncia Holiday, I would like to discuss corporate / MICE travel requirements.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block bg-navy px-8 py-4 text-[0.78rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold hover:text-navy-deep"
          >
            Talk To Our MICE Team
          </a>
        </Reveal>
        <Reveal delay={80}>
          <img
            src={miceImg}
            alt="Business travellers walking through an airport terminal at sunrise"
            width={1280}
            height={900}
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Real Google reviews for Sanncia Holiday, transcribed from the business's
 * Google Business Profile (5.0★ from 19 reviews). Only reviews that include
 * written feedback are shown here. See every review via GOOGLE_REVIEWS_URL.
 */
const REVIEWS = [
  {
    name: "ajay kumar",
    meta: "Local Guide · 13 reviews",
    when: "7 years ago",
    text: "Thank you Sanncia Holidays for making our trip a most memorable one for life. I recently went to Bali through Sanncia and it was such an amazing experience — their hospitality and empathy for customers is simply marvellous.",
  },
  {
    name: "Jaya Vignesh",
    meta: "4 reviews",
    when: "7 years ago",
    text: "Had the most remarkable tour with Sanncia Holidays. I was extremely satisfied — they were very courteous and helpful from the very beginning, organising our trip to Italy in the best possible way.",
  },
  {
    name: "kanthakumar D",
    meta: "8 reviews · 1 photo",
    when: "7 years ago",
    text: "We thank Sanncia Holiday for making our 5-day tour of the Golden Triangle so special. Everyone was friendly, professional, kind and courteous, showing such pride in wanting to please us!",
  },
  {
    name: "P K",
    meta: "7 reviews",
    when: "7 years ago",
    text: "We booked through Sanncia Holiday for our trip to Amsterdam and the experience was amazing. They provide the best prices on hotels and flights, and guided us on where and how to explore Amsterdam to make our trip more memorable.",
  },
  {
    name: "bharathi dasan",
    meta: "4 reviews",
    when: "6 years ago",
    text: "We want to thank Sanncia Holiday for our Holy Land trip to Jerusalem and other countries. The tour was conducted very meticulously and all our facilities were taken care of.",
  },
  {
    name: "Arvind Narendran",
    meta: "Local Guide · 13 reviews",
    when: "7 years ago",
    text: "The staff is very friendly. I booked a 5-day trip to Malaysia and was provided with the best hotel and travel guide for sightseeing. I'd recommend anyone looking for a genuine travel experience at a reasonable price to destinations worldwide.",
  },
  {
    name: "Sandhya H.",
    meta: "2 reviews",
    when: "3 years ago",
    text: "Thank you Sanncia Holiday for making my Dubai trip so hassle-free. It was also cheaper compared to a self-organised trip. Looking forward to my future trips organised by you.",
  },
  {
    name: "manohar more",
    meta: "2 reviews",
    when: "3 years ago",
    text: "Thank you Sanncia Holiday for a wonderful trip — it was well organised. I recently went to Thailand and would definitely recommend them to everyone.",
  },
  {
    name: "MOHAMMED ARSHAN",
    meta: "Local Guide · 27 reviews",
    when: "7 years ago",
    text: "100% satisfied. Thanks Sanncia Holidays — next tour, Dubai!",
  },
  {
    name: "Srinivas.S AICC",
    meta: "3 reviews",
    when: "4 years ago",
    text: "I frequently fly through Sanncia. Noble M.D — very fantastic service. Wishing them the very best ahead.",
  },
  {
    name: "Amit Kumar Joshi",
    meta: "Local Guide · 22 reviews",
    when: "7 years ago",
    text: "A good experience with them and a wonderful staff. Hospitality was beyond expectations.",
  },
  {
    name: "suchanth prasanth",
    meta: "Local Guide · 6 reviews",
    when: "6 years ago",
    text: "Best holiday consultant for customised tours!",
  },
];

function initialOf(name: string) {
  const first = name.trim().charAt(0);
  return first ? first.toUpperCase() : "★";
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Customer Stories</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Real Journeys. Real Experiences.
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[2.4rem] leading-none font-extrabold text-navy-deep">5.0</span>
              <span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </span>
                <span className="mt-1 block text-[0.8rem] text-muted-foreground">
                  Rated 5.0 from 19 Google reviews
                </span>
              </span>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy/20 px-5 py-3 text-[0.78rem] font-bold tracking-[0.06em] text-navy uppercase transition-colors hover:border-gold hover:text-gold-deep"
            >
              Read all reviews on Google
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-8">
        {REVIEWS.map((r) => (
          <article
            key={r.name + r.when}
            className="flex w-[82vw] shrink-0 snap-start flex-col border border-border bg-white p-8 sm:w-[420px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1" aria-label="Rated 5 out of 5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-gold/40" aria-hidden="true" />
            </div>

            <p className="mt-5 grow text-[0.98rem] leading-relaxed text-navy/80">“{r.text}”</p>

            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-[0.85rem] font-bold text-gold"
              >
                {initialOf(r.name)}
              </span>
              <div>
                <p className="text-[0.9rem] font-bold text-navy">{r.name}</p>
                <p className="text-[0.75rem] text-muted-foreground">
                  {r.meta} · {r.when}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-[1400px] px-5 sm:px-8">
        <p className="text-[0.8rem] text-muted-foreground">
          Reviews sourced from our{" "}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline-offset-2 hover:text-gold-deep hover:underline"
          >
            Google Business Profile
          </a>
          .
        </p>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Compass,
    title: "Vision",
    body: "Make travel planning simpler, smarter and more memorable.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "Deliver personalised travel planning and end-to-end travel support — helping people and companies travel smart and achieve more, as a one-stop shop for travel services.",
  },
  {
    icon: Gem,
    title: "Values",
    body: "Trust · Personal Attention · Expertise · Transparency · Customer Experience",
  },
];

export function VisionMission() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Our Vision. Our Mission. Our Values.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Icon className="h-6 w-6 text-gold-deep" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-bold text-navy-deep">{title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={ctaImg}
        alt="Open mountain road at dusk"
        width={1920}
        height={1024}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,20,44,0.85)_0%,rgba(9,20,44,0.7)_100%)]"
      />
      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-40">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.1rem,5.6vw,4.4rem)] leading-[1] font-extrabold text-white">
            Tell Us Where You Want To Go.
            <br />
            <span className="text-gold">We&apos;ll Plan The Rest.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
            From your first idea to the final itinerary, let Sanncia Holiday take care of the
            journey.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="bg-gold px-8 py-4 text-center text-[0.78rem] font-bold tracking-[0.14em] text-navy-deep uppercase transition-colors hover:bg-white"
            >
              Get A Customised Trip
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/45 px-8 py-4 text-[0.78rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-[0.9rem] text-white/70">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gold">
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

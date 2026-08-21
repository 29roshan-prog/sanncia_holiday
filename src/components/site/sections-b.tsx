import { MessageCircle, Quote, Star, Target, Compass, Gem } from "lucide-react";
import miceImg from "@/assets/mice.webp";
import ctaImg from "@/assets/cta.webp";
import { Reveal } from "./reveal";
import { whatsappHref, WHATSAPP_DISPLAY, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "./brand";

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
                      <dd className="text-muted-foreground">Coming soon</dd>
                    </div>
                  ),
                )}
              </dl>
              <p className="mt-6 text-[0.8rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                Package details coming soon
              </p>
              <a
                href={whatsappHref(
                  `Hi Sanncia Holiday, I would like package details for ${name}. Please help me with the details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-navy px-6 py-3.5 text-[0.74rem] font-bold tracking-[0.14em] text-navy uppercase transition-colors hover:bg-navy hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
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

export function Testimonials() {
  return (
    <section id="reviews" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Customer Stories</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.03] font-extrabold text-navy-deep">
            Real Journeys. Real Experiences.
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-navy">Google Reviews Integration</span> — this
            carousel is ready for live Google reviews. Cards below are empty placeholders, no
            testimonials have been invented.
          </p>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-8">
        {[0, 1, 2, 3].map((i) => (
          <article
            key={i}
            className="w-[82vw] shrink-0 snap-start border border-border bg-white p-8 sm:w-[420px]"
          >
            <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
            <div className="mt-5 flex gap-1" aria-label="Rating placeholder">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="h-4 w-4 text-border" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Review text will appear here once Google Reviews are connected.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-full bg-navy-soft text-[0.7rem] font-bold text-navy/50"
              >
                —
              </span>
              <div>
                <p className="text-[0.85rem] font-bold text-navy">Customer name</p>
                <p className="text-[0.75rem] text-muted-foreground">Google review</p>
              </div>
            </div>
          </article>
        ))}
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
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
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

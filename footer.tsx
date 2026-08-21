import { Facebook, Instagram, MapPin, Youtube } from "lucide-react";
import { Reveal } from "./reveal";
import {
  whatsappHref,
  WhatsAppIcon,
  WHATSAPP_DISPLAY,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
} from "./brand";

const ADDRESS =
  "SAI SADAN, 66-A, 7th Main Road, Mahadeshwara Nagar, BTM 2nd Stage, Bengaluru, Karnataka 560076";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy-deep text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr_1fr]">
          <Reveal>
            <span className="text-[1.15rem] font-extrabold tracking-[-0.02em] text-white">
              SANN<span className="text-gold">cia</span>
              <span className="ml-2 text-[0.6rem] font-semibold tracking-[0.34em] text-white/70 uppercase align-middle">
                Holiday
              </span>
            </span>
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
              A travel and tour partner that designs and manages the complete travel experience —
              domestic and international — from the first idea to the journey home.
            </p>
            <p className="mt-6 text-[0.78rem] tracking-[0.16em] text-gold uppercase">
              Since 2019 · Founded by Monica C · IATA Accredited · BNI Affiliated
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="text-[0.66rem] font-bold tracking-[0.28em] text-gold uppercase">
              Contact
            </h2>
            <address className="mt-6 space-y-4 text-[0.95rem] not-italic text-white/70">
              <p className="max-w-xs leading-relaxed">{ADDRESS}</p>
              <p>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                  {EMAIL}
                </a>
              </p>
            </address>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="text-[0.66rem] font-bold tracking-[0.28em] text-gold uppercase">
              Enquire
            </h2>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gold px-7 py-4 text-[0.78rem] font-bold tracking-[0.14em] text-navy-deep uppercase transition-colors hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <p className="mt-4 text-[0.82rem] text-white/50">
              WhatsApp is our fastest enquiry channel.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                { icon: MapPin, label: "Google Maps" },
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  title={`${label} link to be added`}
                  aria-label={`${label} — link to be added`}
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-[0.72rem] font-semibold text-white/55 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/12 pt-8 text-[0.78rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sanncia Holiday. All rights reserved.</p>
          <p>Travel agency in Bangalore · Domestic & international travel management</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="animate-wa-jump fixed right-5 bottom-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-[0.75rem] font-bold tracking-[0.12em] text-white uppercase shadow-lg shadow-black/25 transition-colors hover:bg-[#1ebe5b]"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

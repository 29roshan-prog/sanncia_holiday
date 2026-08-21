import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, whatsappHref } from "./brand";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-border bg-background/95 py-2 backdrop-blur-sm"
          : "border-transparent bg-background py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#home" aria-label="Sanncia Holiday home" className="flex shrink-0 items-center">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.82rem] font-semibold text-navy/75 transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-navy px-6 py-3 text-[0.78rem] font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-gold hover:text-navy-deep sm:inline-block"
          >
            Plan My Trip
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center border border-border text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-x-0 top-[64px] bottom-0 z-40 origin-top bg-navy-deep px-6 pt-10 transition-all duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 35}ms` }}
              className={`border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block bg-gold px-6 py-4 text-center text-sm font-bold tracking-[0.14em] text-navy-deep uppercase"
        >
          Plan My Trip
        </a>
      </div>
    </header>
  );
}

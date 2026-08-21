import { useEffect, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.webp";
import { whatsappHref, WHATSAPP_DISPLAY } from "./brand";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setOffset(Math.min(window.scrollY, 900) * 0.18);
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="Aerial view of a tropical island coastline at golden hour"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-[118%] w-full object-cover"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.04)` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,20,44,0.72)_0%,rgba(9,20,44,0.35)_38%,rgba(9,20,44,0.86)_100%)]"
      />

      <div className="mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
        <h1
          className={`max-w-4xl text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] font-extrabold text-white transition-all delay-100 duration-1000 ease-out ${ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Your Journey.
          <br />
          <span className="text-gold">Our Expertise.</span>
        </h1>

        <p
          className={`mt-6 max-w-xl text-base leading-relaxed text-white/80 transition-all delay-200 duration-1000 ease-out sm:text-lg ${ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Personalised travel experiences, thoughtfully planned from start to finish — so you can
          simply enjoy the journey.
        </p>

        <div
          className={`mt-10 flex flex-col gap-3 transition-all delay-300 duration-1000 ease-out sm:flex-row sm:items-center ${ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <a
            href="#contact"
            className="bg-gold px-8 py-4 text-center text-[0.78rem] font-bold tracking-[0.14em] text-navy-deep uppercase transition-colors hover:bg-white"
          >
            Get a Customised Trip
          </a>
          <a
            href="#destinations"
            className="border border-white/45 px-8 py-4 text-center text-[0.78rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
          >
            Explore Our Journeys
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-2 py-4 text-[0.82rem] font-semibold text-white/85 transition-colors hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.3em] text-white/55 uppercase">
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          Scroll
        </div>
      </div>
    </section>
  );
}

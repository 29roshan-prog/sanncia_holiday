import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TrustStrip, About, Difference, Services, Specialisations } from "@/components/site/sections-a";
import { Destinations } from "@/components/site/destinations";
import { Portfolio, Gallery } from "@/components/site/portfolio";
import {
  Packages,
  WhySanncia,
  Mice,
  Testimonials,
  VisionMission,
  FinalCta,
} from "@/components/site/sections-b";
import { SiteFooter, WhatsAppFab } from "@/components/site/footer";

const TITLE = "Sanncia Holiday | Customised Domestic & International Travel";
const DESCRIPTION =
  "Sanncia Holiday creates personalised domestic and international travel experiences with customised tour packages, flights, hotels, visas and complete travel management.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Sanncia Holiday",
          description: DESCRIPTION,
          foundingDate: "2019",
          founder: { "@type": "Person", name: "Monica C" },
          telephone: "+91 80 4372 6852",
          email: "trips@sannciaholiday.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "SAI SADAN, 66-A, 7th Main Road, Mahadeshwara Nagar, BTM 2nd Stage",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560076",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Difference />
        <Services />
        <Specialisations />
        <Destinations />
        <Portfolio />
        <Packages />
        <WhySanncia />
        <Mice />
        <Testimonials />
        <VisionMission />
        <Gallery />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}

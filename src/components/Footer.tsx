import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SITE_ADDRESS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#servicos", label: "Serviços" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Psychologist", "MedicalBusiness"],
  name: "Valesca Panichi",
  description:
    "Psicóloga clínica em Novo Hamburgo, RS. Atendimento psicoterapêutico para adultos, presencial e online, com abordagem TFE e ACP.",
  url: "https://valescapanichi.com.br",
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Lucas de Oliveira, 49 - Sl 504",
    addressLocality: "Novo Hamburgo",
    addressRegion: "RS",
    postalCode: "93510-110",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.6868,
    longitude: -51.1328,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Novo Hamburgo",
    },
    {
      "@type": "Country",
      name: "Brasil",
    },
  ],
  sameAs: [INSTAGRAM_URL],
  priceRange: "$$",
};

export default function Footer() {
  return (
    <footer className="section-pad border-t border-charcoal/5 bg-cream pb-28 pt-16 sm:pb-24 sm:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div>
          <p className="font-display text-lg font-semibold text-charcoal">
            Valesca Panichi · Psicóloga Clínica
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
            Psicologia clínica com abordagem TFE e ACP — escuta, acolhimento e
            cuidado em Novo Hamburgo e online.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-mutedSage">
            Navegação
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-charcoal/75 transition hover:text-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-mutedSage">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm text-charcoal/75">
            <li>{SITE_ADDRESS.full}</li>
            <li>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition hover:text-terracotta"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium transition hover:text-terracotta"
                aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-charcoal/5 pt-6 text-center text-xs text-charcoal/50 sm:text-left">
        © 2026 Valesca Panichi Psicologia · CRP [confirmar com Valesca]
      </p>
    </footer>
  );
}

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import FadeIn from "@/components/FadeIn";

export default function CTABanner() {
  return (
    <section
      className="section-pad bg-sage py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-banner-heading"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-banner-heading"
          className="font-display text-3xl font-medium leading-[1.2] text-cream sm:text-4xl"
        >
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          Se algo em você pediu um espaço de escuta, esse pode ser o momento. Me
          chama no WhatsApp — vamos com calma, sem pressão.
        </p>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-2xl bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-terracotta/90 sm:text-base"
        >
          Fale comigo no WhatsApp
        </a>
      </FadeIn>
    </section>
  );
}

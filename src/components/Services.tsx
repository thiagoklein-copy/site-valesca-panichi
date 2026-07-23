import { buildWhatsAppUrl } from "@/lib/whatsapp";
import FadeIn from "@/components/FadeIn";

const SERVICES = [
  {
    title: "Terapia Individual Presencial",
    body: "Atendimento no consultório em Novo Hamburgo, num espaço pensado para o seu conforto e privacidade.",
  },
  {
    title: "Terapia Individual Online",
    body: "Atendimento por videochamada para todo o Brasil, com a mesma qualidade de escuta e cuidado do presencial.",
  },
  {
    title: "Avaliação Psicológica",
    body: "Processo de avaliação para apoiar decisões pessoais, profissionais ou clínicas, com escuta técnica e cuidadosa.",
  },
] as const;

export default function Services() {
  return (
    <section
      id="servicos"
      className="section-pad bg-cardBg/50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Como posso te ajudar</p>
          <h2
            id="services-heading"
            className="font-display mt-4 text-3xl font-medium leading-[1.2] text-charcoal sm:text-4xl"
          >
            Cuidado psicológico para adultos
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delayMs={i * 100}>
              <article className="flex h-full flex-col rounded-3xl bg-cream p-7 shadow-sm ring-1 ring-charcoal/5 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/70">
                  {service.body}
                </p>
                <a
                  href={buildWhatsAppUrl(
                    `Olá, Valesca! Tenho interesse em ${service.title} e gostaria de agendar uma conversa.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-terracotta transition hover:text-sage"
                >
                  Agendar conversa
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

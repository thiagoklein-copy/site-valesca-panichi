import FadeIn from "@/components/FadeIn";

const CREDENTIALS = [
  {
    value: "Mestrado",
    label: "Diversidade e Inclusão, Universidade Feevale",
  },
  {
    value: "10+ anos",
    label: "de formação em Psicologia",
  },
  {
    value: "TFE + ACP",
    label: "Terapia Focada nas Emoções e Abordagem Centrada na Pessoa",
  },
  {
    value: "Online e presencial",
    label: "atendimento em todo o Brasil",
  },
] as const;

export default function CredentialsBar() {
  return (
    <section
      className="section-pad border-y border-charcoal/5 bg-cardBg/70 py-10 sm:py-12"
      aria-label="Credenciais"
    >
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {CREDENTIALS.map((item, i) => (
          <FadeIn key={item.value} delayMs={i * 80}>
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl font-semibold leading-none tracking-tight text-terracotta sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-charcoal/70">
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

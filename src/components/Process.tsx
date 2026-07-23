import FadeIn from "@/components/FadeIn";

const STEPS = [
  {
    num: "01",
    title: "Primeiro contato",
    body: "Você me chama no WhatsApp e conta um pouco do que está buscando.",
  },
  {
    num: "02",
    title: "Conversa inicial",
    body: "Alinhamos horários, formato (presencial ou online) e tiramos as primeiras dúvidas.",
  },
  {
    num: "03",
    title: "Início do acompanhamento",
    body: "Começamos as sessões, no seu ritmo, construindo juntos um espaço de confiança.",
  },
] as const;

export default function Process() {
  return (
    <section
      className="section-pad bg-sage py-20 sm:py-24 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-cream/60">Como funciona</p>
          <h2
            id="process-heading"
            className="font-display mt-4 text-3xl font-medium leading-[1.2] text-cream sm:text-4xl"
          >
            Do primeiro contato ao processo terapêutico
          </h2>
        </FadeIn>

        <ol className="relative mt-14 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* Connecting rule — desktop */}
          <div
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-cream/20 lg:block"
            aria-hidden
          />

          {STEPS.map((step, i) => (
            <FadeIn key={step.num} delayMs={i * 120}>
              <li className="relative text-center lg:text-left">
                <p className="font-display text-4xl font-semibold tracking-tight text-terracotta sm:text-5xl">
                  {step.num}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-cream/75">
                  {step.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

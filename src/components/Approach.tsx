import FadeIn from "@/components/FadeIn";

const CARDS = [
  {
    title: "Escuta acolhedora",
    body: "Um espaço onde você pode se expressar sem julgamento, no seu tempo.",
  },
  {
    title: "Autenticidade",
    body: "Valorizamos quem você realmente é, para construir caminhos que façam sentido pra sua vida.",
  },
  {
    title: "Transformação",
    body: "Cada encontro é uma oportunidade de desenvolver recursos internos e seguir em frente com mais leveza.",
  },
] as const;

export default function Approach() {
  return (
    <section
      id="abordagem"
      className="section-pad py-20 sm:py-24 lg:py-28"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Minha abordagem</p>
          <h2
            id="approach-heading"
            className="font-display mt-4 text-3xl font-medium leading-[1.2] text-charcoal sm:text-4xl"
          >
            Autenticidade, empatia e cuidado em cada encontro
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Minha prática é orientada pela Terapia Focada nas Emoções (TFE) e
            pela Abordagem Centrada na Pessoa (ACP) — abordagens que valorizam a
            autenticidade, a empatia e o desenvolvimento de recursos internos
            para lidar com os desafios da vida.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delayMs={i * 100}>
              <article className="h-full rounded-3xl bg-cardBg p-7 sm:p-8">
                <div
                  className="mb-5 h-1 w-10 rounded-full bg-mutedSage"
                  aria-hidden
                />
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                  {card.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

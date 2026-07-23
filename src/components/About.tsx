import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section
      id="sobre"
      className="section-pad bg-sage py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="eyebrow !text-cream/65">Sobre o meu trabalho</p>
        <h2 id="about-heading" className="sr-only">
          Sobre o meu trabalho
        </h2>
        <blockquote className="font-display mt-8 text-2xl font-medium leading-[1.35] text-cream sm:text-3xl lg:text-[2.15rem]">
          &ldquo;Sou psicóloga clínica e dedico meu trabalho ao cuidado de
          adultos em suas diferentes necessidades emocionais e pessoais. Ofereço
          um espaço seguro e acolhedor, onde a escuta atenta e o respeito são
          fundamentais para que cada pessoa possa se sentir compreendida e
          apoiada em seu processo de crescimento.&rdquo;
        </blockquote>
        <p className="mt-8 text-sm font-medium tracking-wide text-cream/70">
          — Valesca Panichi
        </p>
      </FadeIn>
    </section>
  );
}

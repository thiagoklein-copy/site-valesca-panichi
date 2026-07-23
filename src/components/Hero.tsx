import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="topo"
      className="section-pad relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      {/* Placeholder visual plane — soft full-bleed atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7EDE3] via-cream to-[#E8EFE4]" />
        <div className="absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-terracotta/10 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-mutedSage/20 blur-3xl" />
        {/* Labeled placeholder for future portrait photo */}
        <div className="absolute bottom-8 right-[8%] hidden h-64 w-52 rotate-3 rounded-3xl border border-dashed border-mutedSage/40 bg-cardBg/60 p-4 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <span className="text-center text-xs font-medium uppercase tracking-wider text-mutedSage">
            Placeholder
          </span>
          <span className="mt-2 text-center text-sm text-charcoal/50">
            Foto profissional
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl animate-[fadeUp_0.8s_ease-out_forwards]">
          <p className="eyebrow text-terracotta/90">
            Psicóloga Clínica · Novo Hamburgo, RS
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-5 text-[2.15rem] font-medium leading-[1.15] tracking-tight text-charcoal sm:text-5xl lg:text-[3.35rem]"
          >
            Um espaço seguro para você se ouvir com mais clareza
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Atendimento psicoterapêutico para adultos, presencial em Novo
            Hamburgo ou online para todo o Brasil. Um lugar de escuta, respeito
            e acolhimento para o seu processo de crescimento.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-terracotta/90 sm:text-base"
            >
              Fale no WhatsApp
            </a>
            <a
              href="#abordagem"
              className="text-sm font-semibold text-sage underline-offset-4 transition hover:text-terracotta hover:underline sm:text-base"
            >
              Conheça minha abordagem ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

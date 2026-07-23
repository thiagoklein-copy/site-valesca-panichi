"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const FAQS = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um momento de conhecimento mútuo, onde você pode contar o que te trouxe até aqui e alinhamos juntos como será o processo.",
  },
  {
    q: "O atendimento é só presencial?",
    a: "Não. Atendo presencialmente em Novo Hamburgo e também online, por videochamada, para pessoas de todo o Brasil.",
  },
  {
    q: "Atende convênio?",
    a: "No momento o atendimento é particular. Consulte comigo pelo WhatsApp sobre nota fiscal para reembolso, caso seu plano ofereça essa opção.",
  },
  {
    q: "Quanto tempo dura o processo terapêutico?",
    a: "Não existe um prazo único. Cada pessoa e cada história pedem um ritmo diferente — avaliamos juntas, ao longo do caminho, o que faz sentido.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="section-pad py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2
            id="faq-heading"
            className="font-display mt-4 text-3xl font-medium leading-[1.2] text-charcoal sm:text-4xl"
          >
            Antes de começarmos
          </h2>
        </FadeIn>

        <FadeIn className="mt-12" delayMs={100}>
          <div className="divide-y divide-charcoal/10 rounded-3xl bg-cardBg px-5 sm:px-7">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <div key={item.q} className="py-1">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="text-base font-semibold text-charcoal sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-sage transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-base leading-relaxed text-charcoal/70">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

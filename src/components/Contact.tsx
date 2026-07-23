"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/FadeIn";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SITE_ADDRESS,
  WHATSAPP_DISPLAY,
  buildContactWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

const GOAL_OPTIONS = [
  "Terapia presencial",
  "Terapia online",
  "Avaliação psicológica",
  "Ainda não sei, quero conversar",
] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState<string>(GOAL_OPTIONS[3]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = buildWhatsAppUrl(
      buildContactWhatsAppMessage({ name, phone, goal })
    );
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="section-pad py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="eyebrow">Vamos conversar</p>
          <h2
            id="contact-heading"
            className="font-display mt-4 text-3xl font-medium leading-[1.2] text-charcoal sm:text-4xl"
          >
            Dar o primeiro passo pode ser mais leve do que parece
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Me conta um pouco do que você busca. Responderei pelo WhatsApp para
            alinharmos horários, formato e tirarmos dúvidas com calma.
          </p>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-terracotta/90"
          >
            Chamar no WhatsApp
          </a>

          <div className="mt-10 space-y-4 rounded-3xl bg-cardBg p-6 text-sm leading-relaxed text-charcoal/80">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wider text-mutedSage">
                Telefone
              </span>
              <a
                href={buildWhatsAppUrl()}
                className="mt-1 inline-block font-medium text-charcoal hover:text-terracotta"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wider text-mutedSage">
                Instagram
              </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-medium text-charcoal hover:text-terracotta"
              >
                @{INSTAGRAM_HANDLE}
              </a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wider text-mutedSage">
                Endereço
              </span>
              <span className="mt-1 block">{SITE_ADDRESS.full}</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delayMs={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cardBg p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-semibold text-charcoal"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como posso te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-charcoal/10 bg-cream px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-2 block text-sm font-semibold text-charcoal"
                >
                  Telefone/WhatsApp
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(51) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-charcoal/10 bg-cream px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20"
                />
              </div>

              <div>
                <label
                  htmlFor="objetivo"
                  className="mb-2 block text-sm font-semibold text-charcoal"
                >
                  Qual seu objetivo?
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  required
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-charcoal/10 bg-cream px-4 py-3 text-base text-charcoal outline-none transition focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20"
                >
                  {GOAL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-2xl bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-terracotta/90"
            >
              Quero agendar minha conversa
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-charcoal/55">
              Ao enviar, você será redirecionada ao WhatsApp com sua mensagem
              pronta.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

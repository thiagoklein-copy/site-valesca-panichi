"use client";

import { FormEvent, useState, type ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  MAPS_URL,
  SITE_ADDRESS,
  WHATSAPP_DISPLAY,
  buildContactWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

const MODALITY_OPTIONS = [
  "Presencial",
  "Online",
  "Avaliação psicológica",
  "Não sei ainda",
] as const;

const fieldClass =
  "w-full rounded-2xl border border-charcoal/10 bg-[#F7F3EC] px-4 py-3.5 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-sage/40 focus:ring-2 focus:ring-sage/15";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modality, setModality] = useState<string>("Não sei ainda");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = buildWhatsAppUrl(
      buildContactWhatsAppMessage({ name, phone, modality, message })
    );
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="section-pad py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
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
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-7">
          {/* Form card */}
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-charcoal/5 sm:p-8"
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-semibold text-charcoal"
                  >
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Como você se chama?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-sm font-semibold text-charcoal"
                  >
                    Telefone / WhatsApp
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
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="modalidade"
                    className="mb-2 block text-sm font-semibold text-charcoal"
                  >
                    Modalidade preferida
                  </label>
                  <div className="relative">
                    <select
                      id="modalidade"
                      name="modalidade"
                      required
                      value={modality}
                      onChange={(e) => setModality(e.target.value)}
                      className={`${fieldClass} appearance-none pr-10`}
                    >
                      {MODALITY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40"
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 5l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-semibold text-charcoal"
                  >
                    O que está te trazendo aqui?
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Pode ser um resumo simples — não precisa ser perfeito. Estou aqui para escutar."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldClass} resize-y min-h-[7.5rem]`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-2xl bg-sage px-6 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-sage/90"
              >
                Enviar mensagem
              </button>
              <p className="mt-3 text-center text-xs leading-relaxed text-charcoal/55">
                Ao enviar, você será redirecionada ao WhatsApp com sua mensagem
                pronta.
              </p>
            </form>
          </FadeIn>

          {/* Info + map card */}
          <FadeIn delayMs={100}>
            <div className="flex h-full flex-col rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-charcoal/5 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
                <InfoItem
                  label="Instagram"
                  icon={<InstagramIcon />}
                  href={INSTAGRAM_URL}
                  external
                >
                  @{INSTAGRAM_HANDLE}
                </InfoItem>

                <InfoItem
                  label="WhatsApp"
                  icon={<PhoneIcon />}
                  href={buildWhatsAppUrl()}
                  external
                >
                  {WHATSAPP_DISPLAY}
                </InfoItem>

                <InfoItem label="Endereço" icon={<PinIcon />}>
                  {SITE_ADDRESS.street}
                  <br />
                  {SITE_ADDRESS.neighborhood}, {SITE_ADDRESS.city} —{" "}
                  {SITE_ADDRESS.state}
                  <br />
                  CEP {SITE_ADDRESS.postalCode}
                </InfoItem>

                <InfoItem label="Horário de atendimento" icon={<ClockIcon />}>
                  Atendimento com horário agendado
                  <br />
                  <span className="text-charcoal/60">
                    Consulte disponibilidade pelo WhatsApp
                  </span>
                </InfoItem>
              </div>

              <div className="relative mt-7 min-h-[220px] flex-1 overflow-hidden rounded-2xl bg-cardBg sm:min-h-[260px]">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1.5 text-xs font-semibold text-charcoal shadow-sm ring-1 ring-charcoal/10 transition hover:bg-cream"
                >
                  Abrir no Maps
                  <ExternalIcon />
                </a>
                <iframe
                  title="Localização do consultório — Valesca Panichi"
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  label,
  icon,
  children,
  href,
  external,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
  href?: string;
  external?: boolean;
}) {
  const valueClass = "mt-1 block text-sm leading-snug text-charcoal";

  return (
    <div className="flex gap-3">
      <span
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cardBg text-sage"
        aria-hidden
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-mutedSage">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`${valueClass} font-medium transition hover:text-terracotta`}
          >
            {children}
          </a>
        ) : (
          <p className={valueClass}>{children}</p>
        )}
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 4.5h3l1.2 3.2-1.7 1.1a12.5 12.5 0 005.2 5.2l1.1-1.7 3.2 1.2v3a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 014.5 6.1 1.5 1.5 0 016 4.5h2.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 8v4.5l3 1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M4.5 2H2.5A1.5 1.5 0 001 3.5v6A1.5 1.5 0 002.5 11h6A1.5 1.5 0 0010 9.5V7.5M7 1h4v4M5.5 6.5L11 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

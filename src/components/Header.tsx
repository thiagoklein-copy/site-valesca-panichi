"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#servicos", label: "Serviços" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-charcoal/5 bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 sm:h-[4.5rem]">
        <a href="#topo" className="group min-w-0 shrink">
          <span className="font-display block text-lg font-semibold leading-tight text-charcoal sm:text-xl">
            Valesca Panichi
          </span>
          <span className="mt-0.5 block text-[0.7rem] font-medium tracking-wide text-mutedSage sm:text-xs">
            Psicóloga Clínica
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/75 transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-2xl bg-terracotta px-4 py-2.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-terracotta/90 sm:inline-flex"
          >
            Fale no WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-charcoal/10 bg-cardBg/80 text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 rounded-full bg-charcoal transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-charcoal transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-charcoal transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-charcoal/5 bg-cream lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="section-pad mx-auto flex max-w-6xl flex-col gap-1 py-4"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-3 py-3 text-base font-medium text-charcoal hover:bg-cardBg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-2xl bg-terracotta px-4 py-3 text-center text-sm font-semibold text-cream"
            onClick={() => setOpen(false)}
          >
            Fale no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

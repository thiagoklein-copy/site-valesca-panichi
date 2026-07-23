export const WHATSAPP_NUMBER = "5551999558935";
export const WHATSAPP_DISPLAY = "(51) 99955-8935";
export const INSTAGRAM_HANDLE = "valescapanichi";
export const INSTAGRAM_URL = "https://instagram.com/valescapanichi";

export const SITE_ADDRESS = {
  street: "R. Lucas de Oliveira, 49 - Sl 504",
  neighborhood: "Centro",
  city: "Novo Hamburgo",
  state: "RS",
  postalCode: "93510-110",
  full: "R. Lucas de Oliveira, 49 - Sl 504 - Centro, Novo Hamburgo - RS, 93510-110",
};

const DEFAULT_MESSAGE =
  "Olá, Valesca! Vi seu site e gostaria de agendar uma conversa.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ContactFormData = {
  name: string;
  phone: string;
  goal: string;
};

export function buildContactWhatsAppMessage(data: ContactFormData): string {
  return [
    "Olá, Valesca! Gostaria de agendar uma conversa.",
    "",
    `Nome: ${data.name}`,
    `Telefone/WhatsApp: ${data.phone}`,
    `Objetivo: ${data.goal}`,
  ].join("\n");
}

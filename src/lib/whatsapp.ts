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
  mapsQuery:
    "R. Lucas de Oliveira, 49 - Sala 504 - Centro, Novo Hamburgo - RS, 93510-110",
};

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS.mapsQuery)}`;

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(SITE_ADDRESS.mapsQuery)}&z=16&output=embed`;

const DEFAULT_MESSAGE =
  "Olá, Valesca! Vi seu site e gostaria de agendar uma conversa.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ContactFormData = {
  name: string;
  phone: string;
  modality: string;
  message: string;
};

export function buildContactWhatsAppMessage(data: ContactFormData): string {
  const lines = [
    "Olá, Valesca! Gostaria de agendar uma conversa.",
    "",
    `Nome: ${data.name.trim()}`,
    `Telefone/WhatsApp: ${data.phone.trim()}`,
    `Modalidade preferida: ${data.modality}`,
  ];

  const note = data.message.trim();
  if (note) {
    lines.push("", "O que me trouxe aqui:", note);
  }

  return lines.join("\n");
}

// Link do WhatsApp (wa.me), com a mensagem pronta quando houver.
export function linkWhatsapp(numero, mensagem) {
  const base = `https://wa.me/${numero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

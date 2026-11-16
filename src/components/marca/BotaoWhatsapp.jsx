import { IconeWhatsapp } from "../Icones.jsx";
import { linkWhatsapp } from "../../utils/whatsapp.js";

// Botão "WhatsApp" (link externo para o wa.me). Aparece na faixa de CTA e na barra fixa do celular.
// É o botão principal das páginas: abre a conversa com a mensagem da marca já pronta. Props: marca
export default function BotaoWhatsapp({ marca }) {
  return (
    <a
      href={linkWhatsapp(marca.whatsapp, marca.contato.mensagem(marca.contato.nomePadrao))}
      className="btn cta-btn cta-btn-primary"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp: falar com a equipe (abre em nova aba)"
    >
      <IconeWhatsapp className="cta-icon" />
      WhatsApp
    </a>
  );
}

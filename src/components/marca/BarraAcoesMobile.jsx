import BotaoWhatsapp from "./BotaoWhatsapp.jsx";

// Barra fixa no rodapé do celular com o botão do WhatsApp (some no desktop, ver cta.css).
// Props: marca
export default function BarraAcoesMobile({ marca }) {
  return (
    <nav className="mobile-cta" aria-label="Ações rápidas">
      <BotaoWhatsapp marca={marca} />
    </nav>
  );
}

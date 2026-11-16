import BotaoWhatsapp from "./BotaoWhatsapp.jsx";

// Faixa de conversão: título + botão do WhatsApp. Props: marca
export default function FaixaCta({ marca }) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="cta-band-text">
        <h2 id="cta-band-title">{marca.ctaBand.titulo}</h2>
        <p className="cta-band-sub">Fale com a equipe e combine o melhor horário.</p>
      </div>
      <div className="cta-band-actions">
        <BotaoWhatsapp marca={marca} />
      </div>
    </section>
  );
}

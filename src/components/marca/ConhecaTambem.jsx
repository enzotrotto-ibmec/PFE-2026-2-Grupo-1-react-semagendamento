import LinkInterno from "../LinkInterno.jsx";
import { outraMarca } from "../../data/marcas.js";

// Card "Conheça também", que leva para a outra marca do mesmo endereço.
// Props: marca (a marca DESTA página), texto (descrição da outra marca).
export default function ConhecaTambem({ marca, texto }) {
  const outra = outraMarca(marca.id);
  const cards = [{ destino: outra, texto }];

  return (
    <section className="cross-brand-section">
      {cards.map(({ destino, texto: descricao }) => (
        <div className="cross-brand-card" key={destino.id}>
          <div className="cross-brand-text">
            <span className="section-tag">Conheça Também</span>
            <h3>{destino.nome}</h3>
            <p>{descricao}</p>
          </div>
          <LinkInterno to={destino.rota} className="btn btn-primary">
            Visitar {destino.nome}
          </LinkInterno>
        </div>
      ))}
    </section>
  );
}

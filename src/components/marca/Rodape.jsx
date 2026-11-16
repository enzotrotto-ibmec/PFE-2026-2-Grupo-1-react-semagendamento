import LinkInterno from "../LinkInterno.jsx";
import { IconeInstagram } from "../Icones.jsx";
import { asset } from "../../utils/asset.js";
import { outraMarca } from "../../data/marcas.js";

// Rodapé das páginas das marcas. Props: marca (data/marcas.js)
export default function Rodape({ marca }) {
  return (
    <footer className="site-footer-page">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src={asset(marca.logo.src)}
            alt={marca.nome}
            width={marca.logo.largura}
            height={marca.logo.altura}
            loading="lazy"
          />
          <p>{marca.rodape.frase}</p>
        </div>

        <div className="footer-contact">
          <p>
            {marca.endereco.rua}
            <br />
            {marca.endereco.cidade}
          </p>
        </div>

        {/* Atalho para a outra marca do mesmo endereço */}
        <nav className="footer-links" aria-label="Outras marcas">
          <span className="footer-links-titulo">Conheça também</span>
          <LinkInterno to={outraMarca(marca.id).rota}>{outraMarca(marca.id).nome}</LinkInterno>
        </nav>

        {/* Link externo (Instagram): aqui o <a> continua, porque não é navegação interna */}
        {marca.instagram && (
          <a
            className="footer-social"
            href={marca.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${marca.instagram.usuario} (abre em nova aba)`}
          >
            <span className="footer-social-icon">
              <IconeInstagram />
            </span>
            <span>{marca.instagram.usuario}</span>
          </a>
        )}
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 {marca.rodape.direitos}. Todos os direitos reservados.</span>
        <LinkInterno className="footer-legal" to="/privacidade">
          Política de Privacidade
        </LinkInterno>
      </div>
    </footer>
  );
}

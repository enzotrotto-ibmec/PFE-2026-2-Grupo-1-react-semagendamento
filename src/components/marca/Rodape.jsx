import LinkInterno from "../LinkInterno.jsx";
import { IconeInstagram } from "../Icones.jsx";
import { asset } from "../../utils/asset.js";

// Rodapé das páginas das marcas. Props: marca (data/marcas.js)
export default function Rodape({ marca }) {
  return (
    <footer className="site-footer-page">
      <div className="footer-inner">
        {/* Só as logos das duas marcas, alinhadas como no cabeçalho da home. A PKZ só existe em branco:
            na One To One (fundo claro) o CSS a escurece. */}
        <div className="footer-brand">
          <div className="footer-par">
            <img src={asset("img/logos/pkz-lab-horizontal-branco.svg")} alt="PKZ Lab" width="849" height="255" loading="lazy" />
            <span className="footer-par-amp" aria-hidden="true">
              &amp;
            </span>
            <img
              src={asset(marca.id === "oto" ? "img/logos/one-to-one-petroleo.svg" : "img/logos/one-to-one-branco.svg")}
              alt="Studio One To One"
              width="140"
              height="47"
              loading="lazy"
            />
          </div>
        </div>

        <div className="footer-contact">
          <p>
            {marca.endereco.rua}
            <br />
            {marca.endereco.cidade}
          </p>
        </div>

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

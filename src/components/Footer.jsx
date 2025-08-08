import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Steven, Caio, Daniel, Gabriel, Daniel G. Todos os direitos reservados.</p>
        <nav className="footer-nav">
          <a href="/Politica" className="footer-link">Política de Privacidade</a>
          <a href="/Termos" className="footer-link">Termos de Uso</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

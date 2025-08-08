import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_projeto-removebg-preview.png";
import "../css/Header.css";

function Header() {
  // Força a navegação e recarrega a página
  const redirecionarParaBusca = () => {
    window.location.href = "/Busca";
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Dragon Ball Logo"
            className="logo"
          />
        </Link>

        <ul className="nav-links">
          <li>
            <button onClick={redirecionarParaBusca} className="nav-btn">
              Buscar
            </button>
          </li>
          <li>
            <Link to="/Contato" className="nav-btn">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import "../css/PaginaNaoEncontrada.css";
import gokuImg from "../assets/ImagemGoku.png";
import ballImg from "../assets/simulacaoKamehame.png";

const PaginaNaoEncontrada = () => {
    const redirecionarParaHome = () => {
        window.location.href = "/";
      };

    return (
        <div className="container">
            <div className="textos">
                <h1>Página não encontrada</h1>
                <h3 onClick={redirecionarParaHome} style={{ cursor: "pointer" }}>Se direcione para um Endpoint válido</h3>
            </div>
            <img src={gokuImg} alt="Goku Kamehameha" className="goku" />
            <img src={ballImg} alt="Kamehameha Ball" className="kamehameha-ball" />
        </div>
    );
};

export default PaginaNaoEncontrada;

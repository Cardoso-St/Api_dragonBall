import React, { useState, useEffect } from "react";
import "../css/Busca.css";

export default function Busca() {
  const [personagens, setPersonagens] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function buscarPersonagens() {
    setCarregando(true);
    setErro(null);

    const paginaAleatoria = Math.floor(Math.random() * 10) + 1;

    try {
      const resposta = await fetch(`https://dragonball-api.com/api/characters?page=${paginaAleatoria}`);
      if (!resposta.ok) throw new Error("Erro ao buscar dados da API do Dragon Ball");

      const dados = await resposta.json();
      setPersonagens(dados.items);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarPersonagens(); // Requisição ao carregar a rota
  }, []);

  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="busca-container">
      <section className="busca-header">
        <h1>Buscar Personagens</h1>
        <div className="busca-form">
          <input
            type="text"
            placeholder="Digite o nome do personagem"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="input-busca"
          />
        </div>
      </section>

      {carregando && <p className="status-msg">Carregando personagens...</p>}
      {erro && <p className="erro-msg">Erro: {erro}</p>}

      {!carregando && !erro && (
        <section className="grid-container" aria-label="Personagens buscados">
          {personagensFiltrados.length > 0 ? (
            personagensFiltrados.map(({ id, name, race, max_height, max_ki, affiliation, image }) => (
              <article key={id} className="card">
                <img src={image} alt={name} className="card-img" />
                <h2 className="card-title">{name}</h2>
                <p><strong>Raça:</strong> {race || "Desconhecida"}</p>
                <p><strong>Altura:</strong> {max_height || "Desconhecida"}</p>
                <p><strong>Ki Máximo:</strong> {max_ki || "Desconhecido"}</p>
                <p><strong>Afiliação:</strong> {affiliation || "Nenhuma"}</p>
              </article>
            ))
          ) : (
            <p className="status-msg">Nenhum personagem encontrado.</p>
          )}
        </section>
      )}
    </main>
  );
}

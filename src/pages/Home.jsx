import React from "react";
import "../css/Home.css";
import imagemSteven from "../assets/imagemSteven.jpeg";
import imagemGabriel from "../assets/imagemGabriel.jpeg";
import imagemDaniel from "../assets/imagemDaniel.jpeg";
import imagemDanielG from "../assets/imagemDanielG.jpeg"
import imagemCaio from "../assets/imagemCaio.jpeg"

const personagens = [
  
  {
    id: 1,
    nome: "Caio",
    tipoMulher: "Cacheada",
    tamanho: "1,80m",
    formacao: "Live NPC",
    hobbie: "Amar",
    imagem: imagemCaio
  },
  {
    id: 2,
    nome: "Gabriel",
    tipoMulher: "O que vier é lucro",
    tamanho: "1,80m",
    formacao: "Top 1 do vaticano",
    hobbie: "Falar o óbvio",
    imagem: imagemGabriel,
  },
  {
    id: 3,
    nome: "Steven",
    tipoMulher: "Loira",       
    tamanho: "1,81m",
    formacao: "Mentiras.senai",
    hobbie: "Odiar Cólica/Taylor Swift",
    imagem: imagemSteven,
  },
  {
    id: 4,
    nome: "Daniel.F",
    tipoMulher: "Todas",
    tamanho: "1,80m",
    formacao: "Personal Trainer",
    hobbie: "Inventar historia",
    imagem: imagemDaniel,
  },
  {
    id: 5,
    nome: "Daniel.G",
    tipoMulher: "Filha de pastor",
    tamanho: "1,71m",
    formacao: "Diabeticação",
    hobbie: "Correr contra glicose",
    imagem: imagemDanielG,
  },
];

export default function Home() {
  return (
    <main className="main-content">
      <section className="intro">
        <h1>Dragon Ball API</h1>
        <p className="summary">
          Bem-vindo ao Dragon Ball API! Aqui você pode explorar personagens,
          locais, episódios e muito mais do universo Dragon Ball de forma simples
          e dinâmica. Utilize as funcionalidades de busca para encontrar seus
          personagens favoritos e descubra curiosidades sobre esse universo
          incrível.
        </p>
      </section>

      <section className="grid-container" aria-label="Personagens Dragon Ball">
        {personagens.map(({ id, nome, tipoMulher, tamanho, formacao, imagem, hobbie }) => (
          <article key={id} className="card">
            <img src={imagem} alt={nome} className="card-img" />
            <h2 className="card-title">{nome}</h2>
            <p><strong>Tipo de mulher:</strong> {tipoMulher}</p>
            <p><strong>Tamanho:</strong> {tamanho}</p>
            <p><strong>Formação:</strong> {formacao}</p>
            <p><strong>Hobbie:</strong> {hobbie}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

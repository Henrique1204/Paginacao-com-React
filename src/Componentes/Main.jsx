import React from 'react';
import Card from "./Card.jsx";
import "../Css/Main.css";

export default () => {

  return (
    <main className="Main container">
      <h1 className="col-12">Livro</h1>
      <Card
        img="./img/livro.png"
        titulo="Milk and Honey Milk and Honey Milk and Honey"
        autor="Henrique P."
        resumo="Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar."
      />

      <Card
        img="./img/livro.png"
        titulo="Milk and Honey Milk and Honey Milk and Honey"
        autor="Henrique P."
        resumo="Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar. Melhor livro sobre leite e mel que você vai encontrar."
      />
    </main>
  );
}

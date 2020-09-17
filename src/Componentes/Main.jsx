import React, { Component } from 'react';
import Card from "./Card.jsx";
import "../Css/Main.css";

buscarDados = async (url) => {
  try {
    const req = await fetch(url);
    const dados = await req.json();

    return dados;
  } catch (e) {
    console.log(e.message);
  }
}

export default class Main extends Component {
  state = {
    dados: []
  }

  componentDidMount = async () => {
    const dados = await this.buscarDados("http://localhost:3000/livros");

    this.setState({dados});
  }

  render() {
    return (
      <main className="Main container">
        <h1 className="col-12">Livro</h1>

        {this.state.dados.map((item) => (
          <Card img="./img/livro.png" titulo={item.titulo} autor={item.autor} resumo={item.resumo}/>
        ))}
      </main>
    );
  }
}

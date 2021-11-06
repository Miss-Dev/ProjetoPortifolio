import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <section className="jumbotron text-center corPrimaria" id="sobre-mim">
      <div className="container">
        <h2 className="jumbotron-heading titulosBrancos">Sobre mim</h2>
        <p className="lead paragrafoBrancos">
          Olá meu nome é Samara e atualmente estou cursando o sexto período no
          curso de Sistemas de Informação UFMS CPAN, atuo na área de
          desenvolvimento backend como Software Developer Intern, voltado para
          raspagem de dados, além de trabalhar diariamente com Banco de dados
          MySQL e PostGrees. Sou uma eterna aprendiz quando o assunto é
          tecnologia : )
        </p>
      </div>
    </section>
  );
}

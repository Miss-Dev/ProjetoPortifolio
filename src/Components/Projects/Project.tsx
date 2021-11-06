import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../../assets/tela_melembra.png";
import logo2 from "../../assets/nasaclicks.PNG";

export default function Navbar() {
  return (
    <div className="album py-5 bg-light" id="projetos">
      <div className="container">
        <h2 className="text-center jumbotron-heading titulosVerdes">
          Projetos
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={logo1}
                data-holder-rendered="true"
                style={{ height: "225px", width: "100%", display: "block" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Esse é um projeto de treinamento para introduzir aos conceitos
                  de python para web com o micro framework Flask.
                </p>
                <ul>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Flask</li>
                  <li>SQLAlchemy</li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success"
                    >
                      Ver Projeto
                    </button>
                    <a href="https://github.com/Miss-Dev/Me-lembra">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                  <small className="text-muted">Projeto Web</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={logo2}
                data-holder-rendered="true"
                style={{ height: "225px", width: "100%", display: "block" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Esse projeto foi desenvolvido durante a disciplina de
                  programação para a web.
                </p>
                <ul>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>React Bootstrap</li>
                  <li>HTML e CSS</li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://miss-dev.github.io/NasaClicks/">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a href="https://github.com/Miss-Dev/ProjetoIniciandoComReact/tree/main/nasaclicks">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                  <small className="text-muted">Projeto Web</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

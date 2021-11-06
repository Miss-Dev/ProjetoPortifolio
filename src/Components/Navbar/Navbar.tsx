import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light"
        style={{ backgroundColor: "rgb(131,111,255)" }}
      >
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          Samara Hurtado Ramos (Miss Dev)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li>
              <a
                href="#projetos"
                className="nav-link"
                style={{ color: "white" }}
              >
                {" "}
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#sobre-mim"
                className="nav-link"
                style={{ color: "white" }}
              >
                Sobre mim
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Miss-Dev"
                className="nav-link"
                style={{ color: "white" }}
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

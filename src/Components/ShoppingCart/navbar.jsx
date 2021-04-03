import React from "react";

//nelle stateless function le props funzionano in modo diverso
//si mettono le props nell'argomento della funzione e non si utilizza il this
//in aggiunta, se volessimo un solo parametro di props, possiamo inserirlo
//nell'oggetto della funzione ed eliminare anche props

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounter}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

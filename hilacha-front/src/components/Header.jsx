import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header>

        <div className="title">
          <h1>La Hilacha</h1>
          <h2>Pizza Gigante</h2>
        </div>

        <div className="phones">
          <h2><FontAwesomeIcon icon={faPhoneAlt} /> 4582-0851</h2>
          <h2><FontAwesomeIcon icon={faPhoneAlt} /> 4581-6504</h2>
        </div>

        <div className="logo">
          <img src="/img/Sin título.jpeg" alt="Logo" />
        </div>

      </header>
    </>
  )
}

export default Header;
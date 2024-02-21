import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="header-nav">
        <div className="header-nav-ul fixed-top shadow">
          <div>logo GIZ</div>
          <ul>
            <input type="search" placeholder="recherche" />
          </ul>
          <div className="profil">profil</div>
        </div>
      </div>
    </div>
  );
}

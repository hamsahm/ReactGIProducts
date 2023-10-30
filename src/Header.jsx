import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Products from "./Products";
import Sector from "./Sector";
import { useState } from "react";

function Header() {
  const [sectors, setSectors] = useState([]);
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/sectors">Sectors</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/sectors" element={<Sector />} />
      </Routes>
    </div>
  );
}

export default Header;

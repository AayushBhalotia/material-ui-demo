import React from "react";

import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  const elements = ["Logo", "Dashboard", "About", "Account"];
  return (
    <header>
      <nav>
        {elements.map((item) => (
          <Link style={navStyle} key={item.toString()} to={item}>
            <div className="items">{item}</div>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;

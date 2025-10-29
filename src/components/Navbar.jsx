import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#222",
      color: "#fff"
    }}>
      <h2>JoJo's Stand Store</h2>
      <div>
        <button style={{
          backgroundColor: "#e63946",
          border: "none",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "8px"
        }}>
          🛒 Carrito (0)
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

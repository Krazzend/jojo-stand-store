import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Bienvenido a la tienda de Stands</h2>
        <p>Explora y elige el poder que definirá tu destino.</p>
      </section>
    </div>
  );
}

export default Home;
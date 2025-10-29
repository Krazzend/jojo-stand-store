import React from "react";

function Hero() {
  return (
    <section style={{
      backgroundImage: "url('https://i.imgur.com/UFo4Y7j.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      height: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1 style={{ fontSize: "3rem", textShadow: "2px 2px 10px black" }}>¡Encuentra tu Stand Ideal!</h1>
      <p style={{ fontSize: "1.5rem", textShadow: "1px 1px 5px black" }}>Power, Style & JoJo energy.</p>
    </section>
  );
}

export default Hero;
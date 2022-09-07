import React from "react";
import Expensive from "../assets/pizza.jpeg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="Home" style={{ backgroundImage: `url(${Expensive})` }}>
        <h1>Pedro's Pizzaria</h1>
        <p>PIZZA TO FIT ANT TESTE</p>
        <button>Order now</button>
      </div>
    </>
  );
}

export default Home;

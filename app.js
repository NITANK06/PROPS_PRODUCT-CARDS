import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div style={{display:"flex", gap:"10px", padding:"30px"}}>

      <ProductCard
        name="real me pro"
        price="29999"
        image="https://via.placeholder.com/200"
        description=" NEW Android smartphone"
      />

      <ProductCard
        name="honor tablet"
        price="23000"
        image="https://via.placeholder.com/200"
        description="Powerfull tablet for work"
      />

      <ProductCard
        name="lava speakers"
        price="3500"
        image="https://via.placeholder.com/200"
        description="noise enhancement speakers"
      />

    </div>
  );
}

export default App;

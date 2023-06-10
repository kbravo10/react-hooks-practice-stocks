import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioHold, onSellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioHold.map((stock, index) => {
        return (
          <Stock key={index} stock={stock} onStockExchange={onSellStock} />
        );
      })}
    </div>
  );
}

export default PortfolioContainer;

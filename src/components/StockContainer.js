import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock, index) => {
        return <Stock key={index} stock={stock} onStockExchange={onBuyStock} />;
      })}
    </div>
  );
}

export default StockContainer;

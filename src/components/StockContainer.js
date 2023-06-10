import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({onBuyStock}) {
  const [stocks, setStock] = useState([]); 
  useEffect(
    () =>
      fetch("http://localhost:3001/stocks")
        .then((res) => res.json())
        .then((data) => setStock((stocks) => (stocks = data))),
    []
  );

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock, index) => {
        return(
        <Stock key={index} stock={stock} onStockExchange={onBuyStock}/>
        )
      })}
    </div>
  );
}

export default StockContainer;

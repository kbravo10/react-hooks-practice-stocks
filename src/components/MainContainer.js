import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockPortfolio, setstockPortfolio] = useState([]);

  function handleBuy(stock) {
    setstockPortfolio([...stockPortfolio, stock]);
  }

  function handleSell(stock) {
    const newPortfolio = stockPortfolio.filter((stocks) => {
      if (stocks === stock) {
        return false;
      }
      return true;
    });
    setstockPortfolio((stockPortfolio) => stockPortfolio = newPortfolio)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onBuyStock={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioHold={stockPortfolio}
            onSellStock={handleSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

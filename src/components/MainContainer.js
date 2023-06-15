import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [filters, setFilters] = useState("");
  const [stockPortfolio, setstockPortfolio] = useState([]);
  const [stocks, setStock] = useState([]);

  useEffect(
    () =>
      fetch(`http://localhost:3001/stocks${filters}`)
        .then((res) => res.json())
        .then((data) => setStock((stocks) => (stocks = data))),
    [filters]
  );

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
    setstockPortfolio((stockPortfolio) => (stockPortfolio = newPortfolio));
  }

  function handleChangeSort(event) {
    console.log(event.target.value);
    if (event.target.value === "Alphabetically") {
      const sortByName = [...stocks].sort(function (first, next) {
        if (first.name < next.name) {
          return -1;
        }
        if (first.name > next.name) {
          return 1;
        }
        return 0;
      });
      setStock((stocks) => (stocks = sortByName));
    }
    if (event.target.value === "Price") {
      const sortByPrice = [...stocks].sort(function (first, next) {
        if (first.price < next.price) {
          return -1;
        }
        if (first.price > next.price) {
          return 1;
        }
        return 0;
      });

      setStock((stocks) => (stocks = sortByPrice));
    }
  }

  function handleChangeFilter(event) {
    if (event.target.value === "none") setFilters((filters) => (filters = ""));
    else {
      setFilters((filters) => (filters = `?type=${event.target.value}`));
    }
  }

  return (
    <div>
      <SearchBar
        onChangeValue={handleChangeSort}
        onChangeFilter={handleChangeFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuyStock={handleBuy} />
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

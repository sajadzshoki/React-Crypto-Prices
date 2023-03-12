import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./components/Coin";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  // React.useEffect(() => {
  //   fetch(
  // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //   ).then((res) => {
  //     setCoins(res.data);
  //   });
  // }, []);
  useEffect(() => {
    // if (!coins.length){
    //   return "...loading"
    // }
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!coins.length) return <span class="loader"></span>;
  return (
    <div className="coin-app">
      <h1 className="header">Crypto Prices</h1>
      <div className="coin-search">
        <form action="">
          <input
            type="text"
            className="coin-input"
            placeholder="Searh coin name"
            onChange={handleChange}
          />
        </form>
      </div>
      <a href="javascript:location.reload(true)" className="refresh">
        <button>refresh</button>
      </a>
      {filteredCoins.map((coin) => {
        return (
          <div>
            <Coin
              key={coin.id}
              rank={coin.market_cap_rank}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

import React from "react";

function Coin({ image, name, price, priceChange, marketCap, rank }) {
  return (
    <div className="container">
      <a href={`https://coinmarketcap.com/currencies/${name}/`}>
        <div className="coin-row">
          <div className="coin">
            <p className="rank">{rank} .</p>
            <img src={image} className="logos" />
            <h2>{name}</h2>
          </div>
          <div className="coin-details">
            <p className="price">{price.toFixed(5)}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </div>
          <p className="coin-marketcap">
            Market Cap :<br></br> {(marketCap / 80).toLocaleString()}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Coin;

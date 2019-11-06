import React from "react";
import { Link } from "react-router-dom";

const CoinRows = ({ coins }) => {
  return (
    <>
      {coins.map(coin => {
        const floatPrice = parseFloat(coin.priceUsd);
        let price = floatPrice.toPrecision(5);
        const floatChange = parseFloat(coin.changePercent24Hr);
        const change = floatChange.toPrecision(3);
        if (coin.symbol === "BTC") {
          const fixPrice = floatPrice.toFixed(2);
          price = parseFloat(fixPrice).toLocaleString();
        }
        return (
          <tr key={coin.symbol}>
            <td>{coin.rank}</td>
            <td>
              <Link
                to={{
                  pathname: `/${coin.symbol}`
                }}
              >
                {coin.name}
              </Link>
            </td>
            <td>${price}</td>
            <td>{Math.floor(coin.marketCapUsd).toLocaleString()}</td>
            <td
              style={
                change.startsWith("-") ? { color: "red" } : { color: "green" }
              }
            >
              {change}%
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CoinRows;

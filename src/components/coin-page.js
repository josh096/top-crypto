import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const CoinPage = ({ coins }) => {
    const coin = _.find(coins, (c) => {
        return c.symbol === window.location.pathname.substring(1);
    });
    const floatPrice = parseFloat(coin.priceUsd);
    let price = floatPrice.toPrecision(5);
    if (coin.symbol === "BTC") {
        const fixPrice = floatPrice.toFixed(2);
        price = parseFloat(fixPrice).toLocaleString();
    }
    return (
        <>
            <div className={"columns"}>
                <div className={"column is-one-third is-offset-one-third"} style={{ height: "100vh" }}>
                    <div className={"card"} style={{ marginTop: "5vh", borderRadius: 10 }}>
                        <div
                            className={"card-image"}
                            style={{
                                padding: "5vh",
                            }}
                        >
                            <img
                                className={"image"}
                                src={`https://cryptoicons.org/api/icon/${coin.symbol.toLowerCase()}/100`}
                                alt={`${coin.name} logo`}
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                            ></img>
                        </div>
                        <div className={"card-content"}>
                            <div className={"media"}>
                                <div className={"media-content"}>
                                    <p style={{ textAlign: "center" }} className={"title is-4"}>
                                        {coin.name}
                                    </p>
                                    <p style={{ textAlign: "center", fontSize: "1.2em" }} className={"subtitle is-6"}>
                                        ${price}
                                    </p>
                                </div>
                            </div>

                            <div className={"content"}>
                                <table className={"table is-hoverable"}>
                                    <tbody>
                                        <tr>
                                            <td>Rank</td>
                                            <td>{coin.rank}</td>
                                        </tr>
                                        <tr>
                                            <td>Symbol</td>
                                            <td>{coin.symbol}</td>
                                        </tr>
                                        <tr>
                                            <td>Circulating Supply</td>
                                            <td>{parseFloat(coin.supply).toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Max Supply</td>
                                            <td>{parseFloat(coin.maxSupply).toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Market Cap</td>
                                            <td>${Math.floor(coin.marketCapUsd).toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Volume (24hr)</td>
                                            <td>${parseFloat(coin.volumeUsd24Hr).toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Change (24hr)</td>
                                            <td>{parseFloat(coin.changePercent24Hr).toPrecision(3)}%</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <Link to="/">
                                                    {" "}
                                                    <a className={"button is-primary is-fullwidth"}>Back to list</a>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoinPage;

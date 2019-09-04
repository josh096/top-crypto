import React, { useState, useEffect } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";

function App() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets?limit=20").then(res => {
            setCoins(res.data.data);
            console.log(res.data.data);
        });
    }, []);

    const LoadingComp = () => {
        return <h1>Loading</h1>;
    };

    const CoinRows = ({ coins }) => {
        return (
            <>
                {coins.map(coin => {
                    const floatPrice = parseFloat(coin.priceUsd);
                    const price = floatPrice.toPrecision(5);
                    const floatChange = parseFloat(coin.changePercent24Hr);
                    const change = floatChange.toPrecision(3);
                    return (
                        <tr>
                            <td>{coin.rank}</td>
                            <td>{coin.name}</td>
                            <td>${price}</td>
                            <td>
                                {Math.floor(coin.marketCapUsd).toLocaleString()}
                            </td>
                            <td>{change}%</td>
                        </tr>
                    );
                })}
            </>
        );
    };

    const CoinTable = ({ coins }) => {
        return (
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <table class="table is-fullwidth is-hoverable">
                        <thead>
                            <tr>
                                <th>
                                    <p title="Rank">Rank</p>
                                </th>
                                <th>
                                    <p title="Name">Name</p>
                                </th>
                                <th>
                                    <p title="Price">Price</p>
                                </th>
                                <th>
                                    <p title="Market Cap">Market Cap</p>
                                </th>
                                <th>
                                    <p title="Price">Change(24hr)</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CoinRows coins={coins} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return <>{coins.length ? <CoinTable coins={coins} /> : <LoadingComp />}</>;
}

export default App;

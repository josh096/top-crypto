import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import CoinPage from "./components/coin-page";
import CoinTable from "./components/coin-table";

import Faker from "faker";

function App() {
    const [coins, setCoins] = useState([]);
    const [hackPhrase, setHackPhrase] = useState("");

    useEffect(() => {
        const getData = () => {
            axios.get("https://api.coincap.io/v2/assets?limit=20").then(res => {
                setCoins(res.data.data);
            });
        };
        getData();
        setInterval(() => {
            getData();
        }, 10000);
    }, []);

    const hackIt = () => {
        setHackPhrase(Faker.hacker.phrase());
    };

    const Loading = () => {
        return (
            <div className="columns loading">
                <div className="column is-one-third is-offset-one-third">
                    <div class="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    };

    const Hacker = () => {
        return (
            <div className="columns">
                <div
                    className="column is-one-third is-offset-one-third"
                    style={{ textAlign: "center", marginTop: "10%" }}
                >
                    <a class="button" onClick={hackIt}>
                        what do we do?
                    </a>
                    <h1 class="title is-1">{hackPhrase}</h1>
                </div>
            </div>
        );
    };

    const PageRouter = ({ coins }) => {
        return (
            <Router>
                <Route
                    exact
                    path="/"
                    component={() => <CoinTable coins={coins} />}
                ></Route>
                <Route
                    path="/coin/:coin"
                    component={() => <CoinPage coins={coins} />}
                ></Route>
                <Route exact path="/hacker" component={() => <Hacker />} />
            </Router>
        );
    };

    return <>{coins.length ? <PageRouter coins={coins} /> : <Loading />}</>;
}

export default App;

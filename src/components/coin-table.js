import React from "react";
import CoinRows from "./coin-rows";

const CoinTable = ({ coins }) => {
    return (
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
                <h1
                    style={{
                        fontSize: "2em",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "white",
                        padding: "0.5em",
                    }}
                >
                    Top Cryptocurrencies
                </h1>
                <h5
                    style={{
                        textAlign: "center",
                        color: "white",
                        padding: "0.5em",
                    }}
                >
                    Powered by CoinCap.io
                </h5>
                <table className="table is-fullwidth is-hoverable" style={{ opacity: "85%", borderRadius: 5 }}>
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

export default CoinTable;

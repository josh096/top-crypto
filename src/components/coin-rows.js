import React from 'react';
import {Link} from 'react-router-dom';

const CoinRows = ({coins}) => {
    return (
        <>
            {coins.map(coin => {
                const floatPrice = parseFloat(coin.priceUsd);
                const price = floatPrice.toPrecision(5);
                const floatChange = parseFloat(coin.changePercent24Hr);
                const change = floatChange.toPrecision(3);
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

export default CoinRows;

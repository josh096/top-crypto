import React from 'react';
import _ from 'lodash';

const CoinPage = ({coins}) => {
    const coin = _.find(coins, c => {
        return c.symbol === window.location.pathname.substring(1);
    });
    const floatPrice = parseFloat(coin.priceUsd);
    const price = floatPrice.toPrecision(5);
    return (
        <>
            <div className='columns'>
                <div className='column is-one-fifth is-offset-two-fifths'>
                    <div class='card' style={{marginTop: '5vh'}}>
                        <div
                            class='card-image'
                            style={{
                                padding: '5vh'
                            }}
                        >
                            <img
                                class='image'
                                src={`https://cryptoicons.org/api/icon/${coin.symbol.toLowerCase()}/100`}
                                alt={`${coin.name} logo`}
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                            ></img>
                        </div>
                        <div class='card-content'>
                            <div class='media'>
                                <div class='media-content'>
                                    <p class='title is-4'>{coin.name}</p>
                                    <p class='subtitle is-6'>${price}</p>
                                </div>
                            </div>

                            <div class='content'>
                                <table className='table is-hoverable'>
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
                                            <td>{parseFloat(coin.supply)}</td>
                                        </tr>
                                        <tr>
                                            <td>Max Supply</td>
                                            <td>
                                                {parseFloat(coin.maxSupply)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Market Cap</td>
                                            <td>
                                                {parseFloat(
                                                    coin.marketCapUsd
                                                ).toPrecision(12)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Volume (24hr)</td>
                                            <td>
                                                {parseFloat(
                                                    coin.volumeUsd24Hr
                                                ).toPrecision(10)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Change (24hr)</td>
                                            <td>
                                                {parseFloat(
                                                    coin.changePercent24Hr
                                                ).toPrecision(3)}
                                                %
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

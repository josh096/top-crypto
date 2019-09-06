import React from 'react';
import CoinRows from './coin-rows';

const CoinTable = ({coins}) => {
    return (
        <div className='columns'>
            <div className='column is-half is-offset-one-quarter'>
                <h1
                    style={{
                        fontSize: '2em',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    Top Crypto Live Updater
                </h1>
                <table className='table is-fullwidth is-hoverable'>
                    <thead>
                        <tr>
                            <th>
                                <p title='Rank'>Rank</p>
                            </th>
                            <th>
                                <p title='Name'>Name</p>
                            </th>
                            <th>
                                <p title='Price'>Price</p>
                            </th>
                            <th>
                                <p title='Market Cap'>Market Cap</p>
                            </th>
                            <th>
                                <p title='Price'>Change(24hr)</p>
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

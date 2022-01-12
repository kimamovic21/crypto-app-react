import React from 'react'
import CoinItem from './CoinItem'
import {Link} from 'react-router-dom'
import Coin from '../routes/Coin'
import './Coins.css'

const Coins = (props) => {
    return (
        <div className='contaier'>
            <div>

                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>volume</p>
                    <p className='hide-mobile'>Mkt cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                            <CoinItem coins={coins} key={coins.id} />
                        </Link>
                    )
                })}

            </div>
        </div> //  className='contaier'
    )
}

export default Coins

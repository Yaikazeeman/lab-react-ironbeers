import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="homeDiv">
            <Link key="allBeers" className="theLink" to='/beers'>
                <div className="link-container">
                    <img src="/img/beers.png"/>
                    <h2>All beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </Link>
            <Link key="randomBeer" className="theLink" to='/random-beer'>
                <div className="link-container">
                    <img src="/img/random-beer.png" />
                    <h2>Random beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </Link>
            <Link key="newBeer" className="theLink" to='new-beer'>
                <div className="link-container">
                    <img src="/img/new-beer.png" />
                    <h2>New beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                </div>
            </Link>
        </div>
    )
}

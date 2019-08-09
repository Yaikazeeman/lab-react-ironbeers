import React, { Component } from 'react'
import BeerListItem from '../components/BeerListItem';
import "./Beers.css"

function allBeers(props) {

    return (
        <div>
            <h2 className="title">All the beers</h2>
            <div>
                {props.beers && props.beers.map((thisBeer) => {
                    return (
                        <BeerListItem thisBeer={thisBeer}/>
                    )
                })}
            </div>
        </div>
    )
}

export default allBeers;

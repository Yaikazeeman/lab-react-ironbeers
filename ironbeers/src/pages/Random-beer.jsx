import React, { Component } from 'react'
import BeerInfo from '../components/BeerInfo'

class RandomBeer extends Component {
    render() {

        var foundBeer = this.props.beers[Math.floor(Math.random()*this.props.beers.length)];

        return (
            <div>
                <BeerInfo foundBeer={foundBeer} />
            </div>
        )
    }
}

export default RandomBeer;
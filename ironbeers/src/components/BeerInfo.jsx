import React, { Component } from 'react'
import './BeerInfo.css';

class BeerInfo extends Component {
    render() {
        
    // console.log(this.props)
        return (
            <div className="beerInfo-container">
                <h2>Beer information</h2>
                <div>
                    <img className="img-BeerInfo" alt="something"  src={this.props.foundBeer.image_url} />
                </div>
                <div>
                    <h2>{this.props.foundBeer.name}</h2>
                    <h4>{this.props.foundBeer.tagline}</h4>
                    <p>{this.props.foundBeer.description}</p>
                    <p>{this.props.foundBeer.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default BeerInfo;


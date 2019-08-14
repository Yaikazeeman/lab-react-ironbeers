import React, { Component } from 'react';
import BeerInfo from '../components/BeerInfo';

class BeerInfoPage extends Component {

    render() {

        const getBeers = (id) => {
            let found = this.props.beers.find(beer => {
                return (beer._id === id)
            })
            return found;
        }

        const { params } = this.props.match;
        const foundBeer = getBeers(params.id);
        // console.log(foundBeer)


        return (
            <div>
                <BeerInfo foundBeer={foundBeer} />
            </div>
        )
    }
}

export default BeerInfoPage;
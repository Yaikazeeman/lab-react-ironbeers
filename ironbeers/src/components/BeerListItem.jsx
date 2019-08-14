import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class BeerListItem extends Component {
    render() {
        return (
            <Link className="theLink" to={`/${this.props.thisBeer._id}`}>
                <div className="beerListItem">
                    <div className="imageDiv">
                        <img className="list-img" alt="something"  src={this.props.thisBeer.image_url} />
                    </div>
                    <div>
                        <h3>{this.props.thisBeer.name}</h3>
                        <p>{this.props.thisBeer.tagline}</p>
                        <p>Created by: {this.props.thisBeer.contributed_by}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default BeerListItem;

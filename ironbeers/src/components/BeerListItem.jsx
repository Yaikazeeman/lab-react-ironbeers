import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class BeerListItem extends Component {
    render() {
        return (
            <Link className="theLink" key={this.props.thisBeer._id} to={`/${this.props.thisBeer._id}`}>
                <div className="beerListItem">
                    <div className="imageDiv">
                        <img className="list-img" src={this.props.thisBeer.image_url} />
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

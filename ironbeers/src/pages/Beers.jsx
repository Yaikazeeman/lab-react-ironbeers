import React, { Component } from "react";
import BeerListItem from "../components/BeerListItem";
import axios from 'axios';
import "./Beers.css";
// import { tsConstructorType } from "@babel/types";

class allBeers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
      query: ""
    }
  }

componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/beers')
    .then(response => {
        this.setState({allBeers: response.data})
    })
    .catch(error => {
        console.log(error);
    });
}

handleFormChange = (e)=> {
    this.setState({ 
        query: e.target.value
    })
    if(e.target.value===""){
        return this.componentDidMount();
    }
    axios.get(`https://ih-beers-api.herokuapp.com/beers/search?q=${this.state.query}`)
    .then(response => {
        this.setState({allBeers: response.data})
    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="search-bar">
              <label>Search</label>
              <input type="text" name="name" value={this.state.query} onChange={this.handleFormChange} /> 
          </div>
        </form>
        <h2 className="title">All the beers</h2>
        <div>
        {this.state.allBeers.length>0? (
        this.props.beers && this.props.beers.map((thisBeer) => {
            return (
                <BeerListItem thisBeer={thisBeer} key={thisBeer._id}/>
            )
            })
        ) : (
          <img src="/img/spinner.svg" alt=""/>
        )}
        </div>
      </div>
    );
  }
}

export default allBeers;



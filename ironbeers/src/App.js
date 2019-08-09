import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/Random-beer";
import NewBeer from "./pages/New-beer";
import BeerInfo from "./pages/BeerInfoPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api.herokuapp.com/beers")
      .then(response => {
        this.setState({
          beers: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/beers"
            render={props => <Beers beers={this.state.beers} {...props} />}
          />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route
            path="/:id"
            render={props => <BeerInfo beers={this.state.beers} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

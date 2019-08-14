import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import ProtectedRoute from "react-router";
import axios from "axios";
import Home from "./pages/Home";
// import Nav from "./components/Nav";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/Random-beer";
import NewBeer from "./pages/New-beer";
import BeerInfoPage from "./pages/BeerInfoPage";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Logout from "./pages/Logout";
import ProtectedRoute from "./pages/ProtectedRoute";
import MainLayout from "./layout/mainLayout";

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
        {/* <Nav /> */}
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route
              path="/beers"
              render={props => <Beers beers={this.state.beers} {...props} />} />
            <Route 
              path="/random-beer" 
              render={props => <RandomBeer beers={this.state.beers} {...props} />} />
            {/* <Route 
              path="/new-beer" 
              render={props => <NewBeer newBeer={this.state.newBeer} {...props} />} /> */}
            <ProtectedRoute redirectUrl="/login" component={NewBeer} path="/new-beer" />
            <Route
              path="/:id"
              render={props => <BeerInfoPage beers={this.state.beers} {...props} />} />
          </Switch>       
        </MainLayout>
      </div>
    );
  }
}

export default App;

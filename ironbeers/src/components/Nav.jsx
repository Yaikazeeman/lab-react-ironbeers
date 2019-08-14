import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { withRouter } from "react-router";
import Auth from "../utils/Auth";
const auth = new Auth();

class Nav extends Component{

    state = {
        user: null
    }

    handleLogout = (e)=> {
        e.preventDefault();
        var fixProps = this.props;
        auth.logout()
            .then(()=> {
                debugger
                this.setState({user: null}, ()=> {
                    fixProps.history.push("/");
                })
                
            })
            .catch((error)=> {
                this.setState({error: error.message})
            })
    }

    componentDidMount() {
        this.setState({
            user: auth.getUser()
        })
    }

  render() {
    return (
      <div className="navDiv">
        {auth.loggedIn() ? (
          <>
            <Link className="theLink" to="/">
              <h3>Home</h3>
            </Link>
            {/* <a href="#" className="theLink" onClick={this.handleLogout}><h3>Logout</h3></a> */}
            <Link className="theLink" onClick={this.handleLogout} to="#">
            <h3>Log out</h3>
            </Link>
          </>
        ) : (
          <>
            <Link className="theLink" to="/signup">
              <h3>Sign up</h3>
            </Link>
            <Link className="theLink" to="/login">
              <h3>Log in</h3>
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);

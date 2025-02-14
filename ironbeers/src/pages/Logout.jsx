import React, { Component } from 'react';
import Auth from "../utils/Auth";
const auth = new Auth();

export default class Logout extends Component {
    
    state = {
        error: null
    }

    componentDidMount(){
        var fixProps = this.props;
        auth.logout()
            .then(()=> {
                debugger
                this.setState({user: null}, ()=> {
                   
                    fixProps.history.push("/");
                })
            })
            .catch((error)=> {
                this.setState({error: error.message});
            })
    }

    render() {
        return (
            <div>
                {this.state.error? 
                <h1>{this.state.error}</h1>
                :
                <img src="/spinner.svg" alt=""/>
                }
            </div>
        )
    }
}

import React, { Component } from 'react'
import Auth from '../utils/Auth';
const auth = new Auth();

export default class login extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (e)=> {
        e.preventDefault();
        auth.login(this.state.username, this.state.password)
            .then(()=> {
                this.setState({error: ""});
                this.props.history.push("/");
            })
            .catch(({response})=> {
                this.setState({error: response.data.message});
            })
    }
    
    handleFormChange = (e)=> {
    this.setState({ 
        [e.target.name]: e.target.value
    })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="username" placeholder="username" onChange={this.handleFormChange} />
                <input type="password" name="password" placeholder="password" onChange={this.handleFormChange}/>
                <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

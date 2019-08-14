import React, { Component } from 'react'
import Auth from '../utils/Auth';
const auth = new Auth();

export default class Signup extends Component {

    constructor(props){
        super(props)
            this.state = {
                username: "",
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (e)=> {
        e.preventDefault();
        auth.signup(this.state)
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
                <h2>Sign up</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="username" placeholder="username" onChange={this.handleFormChange} />
                    <input type="text" name="firstname" placeholder="firstname" onChange={this.handleFormChange} />
                    <input type="text" name="lastname" placeholder="lastname" onChange={this.handleFormChange} />
                    <input type="text" name="email" placeholder="email" onChange={this.handleFormChange}/>
                    <input type="password" name="password" placeholder="password" onChange={this.handleFormChange}/>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
// import qs from "querystring";
import axios from 'axios';
import './New-beer.css';

class NewBeer extends Component {

    constructor(props) {
        super(props)
        this.formRef = React.createRef();
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            attenuation_level: "",
            brewers_tips: "",
            contributed_by: "",
            picture: ""
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormChange = (e)=> {
    this.setState({ 
        [e.target.name]: e.target.value
    })
    }

    handleFormSubmit = (e)=> {
    e.preventDefault(); 
    let form = new FormData(this.formRef.current);
    axios({
        method: "POST",
        // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        // data:  qs.stringify(this.state), // don't send data in json format => cors error
        data: form,
        url: 'https://ih-beers-api.herokuapp.com/beers/new'
    })
    .then((response)=> {
        console.log('the beer has been added')
        this.props.history.push('/')
    })
    .catch((error)=> {
        console.log(error)
    })
    }
    
    render() {
        return (
            <div className="newBeerContainer">
                <h2>Add a new beer</h2>
                <form ref={this.formRef} onSubmit={this.handleFormSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="name" onChange={this.handleFormChange}/>
                    <label>Tagline: </label>
                    <input type="text" name="tagline" placeholder="tagline" onChange={this.handleFormChange}/>
                    <label>Description: </label>
                    <input type="text" name="description" placeholder="description"  onChange={this.handleFormChange}/>
                    <label>First brewed: </label>
                    <input type="text" name="first_brewed" placeholder="first_brewed"  onChange={this.handleFormChange}/>
                    <label>Attenuation level: </label>
                    <input type="text" name="attenuation_level" placeholder="attenuation_level"  onChange={this.handleFormChange}/>
                    <label>Brewers tips: </label>
                    <input type="text" name="brewers_tips" placeholder="brewers_tips"  onChange={this.handleFormChange}/>
                    <label>Contributed by: </label>
                    <input type="text" name="contributed_by" placeholder="contributed_by" onChange={this.handleFormChange}></input>
                    <input name="picture" type="file" required></input>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;

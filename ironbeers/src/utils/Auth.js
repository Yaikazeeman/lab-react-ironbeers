import axios from 'axios';
import qs from 'querystring';

export default class Auth {

    login(username, password) {
        return axios({
            method: "POST",
            url: "/auth/login",
            baseURL: "https://ih-beers-api.herokuapp.com/",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            this.setUser(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    signup({username, firstname, lastname, email, password}) {
        return axios({
            method: "POST",
            url: "/auth/signup",
            baseURL: "https://ih-beers-api.herokuapp.com/",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, firstname, lastname, password, email}),
        })
        .then((response)=> {
            console.log("account is created")
            this.setUser(response.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    logout(){
       return axios({
            baseURL: "https://ih-beers-api.herokuapp.com/",
            url: "/auth/logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    } 

}

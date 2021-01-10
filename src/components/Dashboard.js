import React, { Component } from 'react'

const API = "http://localhost:3000";

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

   componentDidMount(){
       const token = localStorage.getItem('token')
       if(!token) {
           this.props.history.push('/')
       } else {
           const reqObj = {
               method: 'GET',
               headers: {
                   'Authorization': `Bearer ${token}`
               },
           };
           fetch(`${API}/current_user`, reqObj)
           .then(resp => resp.json())
           .then(data => {
            //    this.props.updateUser(data)
            console.log(data)
           })
           .catch(err => console.log(err))
       }
   }

    render() {
        console.log(this.props)
        return (
            <div>
                <h5>Dashboard</h5>
            </div>
        )
    }
}

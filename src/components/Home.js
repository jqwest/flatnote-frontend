import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
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
            fetch('http://localhost:3000/current_user', reqObj)
            .then(resp => resp.json())
            .then(data => {
                this.props.udateUser(data)
            })
            .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
                <h4>Welcom to Home Page</h4>
            </div>
        )
    }
}

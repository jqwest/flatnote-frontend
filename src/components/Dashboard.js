import React, { Component } from 'react'

export default class Dashboard extends Component {
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
            this.props.history.push('/login')
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
                this.props.updateUser(data)
            })
            .catch(err => console.log(err))
            console.log(token)
        }
    }
    render() {
        return (
            <div>
                <h5>Dashboard</h5>
            </div>
        )
    }
}

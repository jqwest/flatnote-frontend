import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            currentUser: this.props.currentUser
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(!token) {
            this.props.history.push('/login')
        } else {
            fetch(`http://localhost:3000/user_notes/${this.state.currentUser.user.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.handleLogin(data)
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

import React from 'react';

class NotesContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: [],
        }
    }

    componentDidMount(id) {
        fetch(`http://localhost:3000/users/${id}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default NotesContainer
import React from 'react';

class NotesContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes: null,
        }
        console.log(props)
    }





    render(){
        console.log(this.props.currentUser);
        
        return (
            <div>

            </div>
        )
    }
}

export default NotesContainer
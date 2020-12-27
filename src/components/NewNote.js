import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { FaPlus, FaMinus } from 'react-icons/fa';

class NewNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        content: "",
        color: "",
        toggled: false
      };
    }
    
    handleChange = e => {
        this.setState({
            title: e.target.value
        });
        let newNote = {};
        newNote.title = this.state.title;
    };

    toggleButton = () => {
        this.setState({
            toggled: !this.state.toggled
        });
    };

    showNoteForm = () => {
        
    }

    render(){
        return(
            <div>
                <Button id='note-toggle' onClick={() =>this.toggleButton()}>
                    {this.state.toggled === false ? <FaPlus /> : <FaMinus />}
                </Button>
                {this.state.toggled ? this.showNoteForm() : null }
            </div>
        );
    }
}

export default NewNote;

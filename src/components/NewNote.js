import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { BsFileEarmarkPlus, BsFileEarmarkMinus } from 'react-icons/bs';

class NewNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        content: "",
        color: "",
        currentNote: {},
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

    createNewNote = newNoteObj => {
       const reqObj = {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
           body: JSON.stringify(newNoteObj)
       }

       fetch(`http://localhost:3000/notes`,  reqObj)
       .then(resp => resp.json())
       .then(data => {
           console.log(data)
       })
    };

    showNoteForm = () => {
        return(
            <Container>
                <div>
                    <Form onSubmit={this.createNewNote}>
                        <div>
                            <label>Title</label>
                            <div>
                                <input
                                    name='title'
                                    type='text'
                                    placeholder='Note Title'
                                />
                            </div>
                        </div>

                        <div>
                            <label>Content</label>
                            <div>
                                <textarea
                                    name="content"
                                    placeholder="Note Content"
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                                <button id="new-note">
                                Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Container>
        )
    }

    render(){
        return(
            <div>
                <Button id='note-toggle' onClick={() =>this.toggleButton()}>
                    {this.state.toggled === false ? <BsFileEarmarkPlus /> : <BsFileEarmarkMinus />}
                </Button>
                { this.state.toggled ? this.showNoteForm() : null }
            </div>
        );
    }
}

export default NewNote;

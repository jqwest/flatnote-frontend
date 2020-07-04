import React from 'react'

const API = 'http://localhost:3000/notes'

class NewNote extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            tags: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const reqObj = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application.json',
                'Accept': 'application/json'},
            body: JSON.stringify({
                ...this.state})
        };

        fetch(API, reqObj)
            .then(resp => resp.json())
            .then(data => console.log(data));
    }

    render(){
        return(
            <div className="note card">
                <form onSubmit={this.handleSubmit}>
                    <h5>Create New Note</h5>
                    <div className='input-field'>
                        <input
                            placeholder='title' 
                            value={this.state.title} 
                            type='text' 
                            name='title' 
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className='input-field'>
                    <textarea 
                        value={this.state.description} 
                        name='description' 
                        type='textarea'
                        placeholder='description'
                        onChange={this.handleChange}>
                    </textarea>
                    </div>
                    <div className='input-field'>
                        <input
                            placeholder='tags' 
                            value={this.state.tags} 
                            type='text' 
                            name='tags' 
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default NewNote;
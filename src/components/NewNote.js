import React from 'react'

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
        const addNewNote = {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags
        }
        console.log(e);

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
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default NewNote;
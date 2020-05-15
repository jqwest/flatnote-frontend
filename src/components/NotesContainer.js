import React, { Component } from 'react'
import NoteList from './NoteList'


class NotesContainer extends Component {
    constructor(){
        super()
        this.state = {
            notes: []
        }
    }
 
    componentDidMount(){
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notes => {
            console.log('fetch', notes)
            this.setState({
                notes: notes
          })
        }
        )}

        // deleteNote = (id) => {
        //     console.log('-------',id)
        // }
    
    // noteComplete = (id) => {
    //     console.log('---, clicked')
    //     const reqObj ={
    //         method: 'PATCH',
    //         headers: { 
    //         'Content-Type': 'application/json'
    //                 },
    //         body: JSON.stringify({
    //             done: true
    //         })
    //         }
        
    // fetch(`http://localhost:3000/notes/${id}`, reqObj)
    // .then(resp => resp.json())
    // .then(updatedNote => {
    //     const newNotes = this.state.notes.map(note => {
    //     if (note.id === updatedNote.id){
    //         return updatedNote
    //         } else {
    //         return note
    //         }
    //     })
        
    //     this.setState({
    //         notes: newNotes
    //         })
    //      })
    // }

    // filterNotes = () => {
    //     return this.state.notes.filter(note => !note.done)
    // }


    render(){
        // console.log(this.state)
        const { notes } = this.state
        return(
            <div>

            </div>
        )
    }
}

export default NotesContainer
import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
    renderNotes = () => {
        // console.log(this.props)
        return this.props.notes.map((note,index) => {
            return <Note {...note} key={index}  />
        })
    }
    render(){
    return (    
        <div className="post card">
        {this.renderNotes()}
        </div>
    );
  }
}


export default NoteList;
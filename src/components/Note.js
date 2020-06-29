import React from 'react'

class Note extends React.Component {
    render(){
    return (    
        <div>
        <h5>Title: {this.props.title}</h5>
        <p>Note: {this.props.note}</p>

        </div>
    );
  }
}

export default Note;
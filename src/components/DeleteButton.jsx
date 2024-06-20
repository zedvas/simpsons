import React, { Component } from 'react';

class DeleteButton extends Component {
    render() { 
        return (
            <button onClick={()=>this.props.onDeleteHandler(this.props.id)}>delete</button>
        );
    }
}
 
export default DeleteButton;
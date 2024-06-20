import React, { Component } from 'react';
class CharacterName extends Component {
    render() { 
        return (
            <h2>{this.props.characterName}</h2>
        );
    }
}
 
export default CharacterName;
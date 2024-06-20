import React, { Component } from 'react';
class Image extends Component {
    render() { 
        const {image, characterName} = this.props
        return (
            <img src={image} alt={characterName}/>
        );
    }
}
 
export default Image;
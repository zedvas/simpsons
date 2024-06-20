import React, { Component } from 'react';
class TotalLikes extends Component {
    state = {  } 
    render() { 
        return (
            <h2>You have liked: {this.props.totalLikes}</h2>
        );
    }
}
 
export default TotalLikes;
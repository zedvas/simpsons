import React, { Component } from 'react';

class LikeButton
 extends Component {
    render() {
        return (
            <button onClick={()=>this.props.onLikeHandler(this.props.id)}>{this.props.liked?"dislike":"like"}</button>
        );
    }
}
 
export default LikeButton
;
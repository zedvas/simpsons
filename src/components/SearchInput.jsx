import React, { Component } from 'react';
class SearchInput extends Component {
    state = {  } 
    render() {
        console.log(this.props) 
        return (<input type="text" onChange={(e)=>{this.props.inputHandler(e)}} value={this.props.inputValue}></input>);
    }
}
 
export default SearchInput;
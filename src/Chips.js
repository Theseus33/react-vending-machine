import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

class Chips extends Component {
  render() {
    return (
      <div
        className='Chips'
        style={{
         
        }}
      >
        <Message>
          <h1> nom nom nom Chips!</h1>
          <Link to='/'>Go Back</Link>
        </Message>
      </div>
    );
  }
}

export default Chips;

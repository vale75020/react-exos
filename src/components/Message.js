import React, { Component } from "react";
import MessageItem from './MessageItem'


export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessage:  [
          { id: 1,
            text: "call mom" 
          }, 
          { id: 2, 
            text: "send email to john"
          }
        ]
    };
  }
  render() {
    const messageItems = this.state.unreadMessage.map(item => (
        <MessageItem key={item.id} item={item}/>
    ))
    return (
      <div>
        {this.state.unreadMessage.length > 0 && 
          <h1>You have {this.state.unreadMessage.length} unread messages !</h1>
        }
        <div className="messagelist">{messageItems}</div>
      </div>
    );
  }
}

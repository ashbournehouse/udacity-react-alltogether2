import React from 'react';

function ChatWindow(props) {
  return (
    <div className="chat-window">
      <h2>Fairly Awesome Chat</h2>
      {/*<div className="name sender">{users[0].username}</div>*/}
      <div className="name sender">{props.username}</div>
      <ul className="message-list">
        {props.messages.map((message, index) => (
          <li key={index}
            /*className={message.username === users[0].username ? 'message sender' : 'message recipient'}*/
            className={message.username === props.username ? 'message sender' : 'message recipient'}
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
      <div>
        <form className="input-group">
          <input type="text" className="form-control" placeholder="Enter your message..." />
          <div className="input-group-append">
            {/*<button className="btn submit-button" disabled={this.isDisabled()}>*/}
            <button className="btn submit-button" disabled={props.isDisabled}>
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>  
  )
}

export default ChatWindow
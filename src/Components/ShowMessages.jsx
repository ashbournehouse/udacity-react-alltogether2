import React from 'react';
import '../Css/ShowMessages.css';
  /* As this isn't updating any data, it can probably
     be a stateless function rather than a class.

     That looks simple so is easy to understand what
     is going on.
  */
function ShowMessages(props) {
  const { username, messages } = props;

  return (
    <div className="message-history">
      <div className="name sender">{username}</div>
      <ul className="message-list">
        {messages.map((message, index) => (
          <li key={index}
            className={message.username === username ?
              'message sender' :
              'message recipient'}
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowMessages
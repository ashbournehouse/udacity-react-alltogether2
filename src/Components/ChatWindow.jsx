import React from 'react';
import ShowMessages from './ShowMessages';
import NewMessage from './NewMessage';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.addMessage = this.props.addMessage.bind(this);
  };
    /* There are two things going on in the chat window
        - Displaying the message history
        - Entering a new message
       So, these are looking like two separate components
        ... let's break it down!!
    */
  render(){
    const { messages, username } = this.props;

    return (
      <div className="chat-window">
        <h2>Fairly Awesome Chat</h2>
        <ShowMessages
          username={username}
          messages={this.props.messages}
        />
        <NewMessage
          username = {username}
          addMessage2 = {this.addMessage}
        />
      </div>
    )
  }
}

export default ChatWindow
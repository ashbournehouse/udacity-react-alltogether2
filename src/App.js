import React, { Component } from 'react';
import './Css/App.css';
import './Css/ChatWindow.css';

import Header from './Components/Header.jsx';
import ChatWindow from './Components/ChatWindow.jsx';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };
  addMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    };
    this.setState(currentState => ({
      messages: currentState.messages.concat([newMessage])
    }))
  };

    /* There are two things going on in the chat window
        - Displaying the message history
        - Entering a new message
       So, these are looking like two separate components
        ... let's break it down!!
    */

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="amys-window">
            <ChatWindow
              username = {users[0].username}
              messages = {this.state.messages}
              addMessage = {this.addMessage}
            />
          </div>
          <div className="johns-window">
            <ChatWindow
              username={users[1].username}
              messages={this.state.messages}
              addMessage = {this.addMessage}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

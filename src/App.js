import React, { Component } from 'react';
import './Css/App.css';

import Header from './Components/Header.jsx';
import ChatWindow from './Components/ChatWindow.jsx';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ChatWindow className = "amys-window" 
             username = {users[0].username}
             messages = {messages}
             isDisabled = {this.isDisabled()}
          />
          <ChatWindow className="johns-window"
             username={users[1].username}
             messages={messages}
             isDisabled = {this.isDisabled()}
          />
        </div>
      </div>
    );
  }
}

export default App;

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
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="amys-window">
            <ChatWindow
              username = {users[0].username}
              messages = {this.state.messages}
            />
          </div>
          <div className="johns-window">
            <ChatWindow
              username={users[1].username}
              messages={this.state.messages}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

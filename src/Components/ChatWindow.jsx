import React from 'react';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  };

  state = {
    newMessageText: '',
  };

  handleNewMessage = (event) => {
    this.setState({newMessageText: event.target.value });
    console.log(this.state.newMessageText.length);
  };

    // inputIsEmpty is used to disable the addItem button
  inputIsEmpty = () => {
    return this.state.newMessageText === '';
  };

  render(){
    return (
      <div className="chat-window">
        <h2>Fairly Awesome Chat</h2>
          {/*<div className="name sender">{users[0].username}</div>*/}
        <div className="name sender">{this.props.username}</div>
        <ul className="message-list">
          {this.props.messages.map((message, index) => (
            <li key={index}
              /*className={message.username === users[0].username ? 'message sender' : 'message recipient'}*/
              className={message.username === this.props.username ? 'message sender' : 'message recipient'}
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
        <div>
          <form className="input-group">
            <input type="text"
                   className="form-control"
                   placeholder="Enter your message..."
                   value={this.state.newMessageText}
                   onChange={this.handleNewMessage}
            />
            <div className="input-group-append">
              {/*<button className="btn submit-button" disabled={this.isDisabled()}>*/}
              <button className="btn submit-button"
                      disabled={this.inputIsEmpty()}>
                      SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ChatWindow
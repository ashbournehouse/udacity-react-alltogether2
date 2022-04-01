import React from 'react';

  /* This one does all the data handling so needs to be a 
       class component.
  */

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.addMessage2 = this.props.addMessage2.bind(this);
  };

  state = {
    newMessageText: '',
  };

  handleMessageChange = (event) => {
    this.setState({newMessageText: event.target.value });
  };

    // inputIsEmpty is used to disable the addItem button
  inputIsEmpty = () => {
    return this.state.newMessageText === '';
  };

  submitMessage = () => {
    this.addMessage(this.props.username, this.state.newMessageText)
  };

  handleSubmit = (event) => {
      // Preventing the default re-render seems to allow time for
      // setState to update the state BEFORE the page re-renders!!!
    event.preventDefault();
    this.addMessage2(this.props.username, this.state.newMessageText);
      // Clear the input window once the new message is submitted
    this.setState({newMessageText: ''});
  }

  render() {
    return (
      <div>
        <form
          className="input-group"
          onSubmit={this.handleSubmit}
        >
          <input type="text"
                 className="form-control"
                 placeholder="Enter your message..."
                 value={this.state.newMessageText}
                 onChange={this.handleMessageChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button"
                    disabled={this.inputIsEmpty()}>
                    SEND
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default NewMessage;

import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    count: 0,
    items: []
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="mainBackground">
        <div className="counterBar">
          <span>{this.state.count} items</span>
        </div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="new-todo" />
          <input
            className="inputForm"
            id="input-form"
            placeholder="Enter your message..."
            onChange={this.handleChange}
            value={this.state.text}
          />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState({ items: this.state.items.concat(newItem), text: "" });
    this.setState({ count: this.state.count + 1 });
  }
}

class TodoList extends Component {
  render() {
    return (
      <div className="messageBox">
        {this.props.items.map(item => (
          <div>
            <p className="avatar">MK</p>
            <div className="message" key={item.id}>
              {item.text}
              <span className="closebtn">&times;</span>
              <span className="closebtn">&frasl;</span>
            </div>
            <span className="timestamp">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
              }).format(item.id)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Counter;

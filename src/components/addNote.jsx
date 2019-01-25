import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { addNoteMutation, getNotes } from "../queries/queries";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      timestamp: ""
    };
  }

  submitNote(e) {
    e.preventDefault();
    if (this.state.content === "") {
      return;
    } else {
      this.props.addNoteMutation({
        variables: {
          content: this.state.content,
          timestamp: this.state.timestamp
        },
        refetchQueries: [{ query: getNotes }]
      });
    }

    document.getElementById("form").reset();
  }

  render() {
    return (
      <form id="form" className="form" onSubmit={this.submitNote.bind(this)}>
        <input
          onChange={e =>
            this.setState({
              content: e.target.value,
              timestamp: Date.now().toString()
            })
          }
          className="inputForm"
          id="input-form"
          placeholder="Enter your message..."
        />
      </form>
    );
  }
}

export default compose(graphql(addNoteMutation, { name: "addNoteMutation" }))(
  AddNote
);

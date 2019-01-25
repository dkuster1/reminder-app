import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getNotes, deleteNoteMutation } from "../queries/queries";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  displayNotes() {
    var data = this.props.getNotes;
    if (data.loading) {
      return <div>Loading...</div>;
    } else {
      return data.notes.map(note => {
        return (
          <div key={note.id}>
            <p className="avatar">MK</p>
            <div className="message">
              {note.content}
              <span
                className="closebtn"
                onClick={e => {
                  this.props.deleteNoteMutation({
                    variables: {
                      id: note.id
                    },
                    refetchQueries: [{ query: getNotes }]
                  });
                }}
              >
                &times;
              </span>
              <span
                className="closebtn"
                onClick={e => {
                  this.setState({ selected: note.id });
                }}
              >
                &frasl;
              </span>
            </div>
            <span className="timestamp">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
              }).format(note.timestamp)}
            </span>
          </div>
        );
      });
    }
  }

  editNote() {
    console.log("Edit");
  }

  countNotes() {
    var data = this.props.getNotes;
    if (data.loading) {
      return null;
    } else {
      var len = 0;
      for (var o in data.notes) {
        len = len + 1;
      }
      return len;
    }
  }

  render() {
    return (
      <div>
        <div className="counterBar">
          <span className="counterBar">{this.countNotes()} items</span>
        </div>
        <div id="Noteslist" className="messageBox">
          {this.displayNotes()}
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getNotes, { name: "getNotes" }),
  graphql(deleteNoteMutation, { name: "deleteNoteMutation" })
)(NotesList);

import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./components/counter.css";

//components
import NotesList from "./components/NotesList";
import AddNote from "./components/addNote";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="mainBackground">
          <NotesList />
          <AddNote />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

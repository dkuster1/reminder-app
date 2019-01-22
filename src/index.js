import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";
/*import { Router, Route, browserHistory } from "react-router";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";*/

/*const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cjr6izarz4qb50130r65klegv"
});
const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={Counter} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
*/
ReactDOM.render(<Counter />, document.getElementById("root"));

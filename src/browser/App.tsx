import React from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import "normalize.css";
import "./App.css";
interface IProps {
  [key: string]: any;
}
const App: React.FC<IProps> = (props) => {
  return (
    <Switch>
      <Route path="/">
        <h1>WELCOME!</h1>
        <p>Start creating react components from here</p>
      </Route>
    </Switch>
  );
};

export default App;

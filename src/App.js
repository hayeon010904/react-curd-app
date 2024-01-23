import { Component } from "react";
import "./App.css";
import Count from "./Count";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}

import { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    // this.addCount = this.addCount.bind(this);!!!
    this.state = {
      count: 0,
    };
  }
  addCount = () => {
    console.log(this, "aa");
    this.setState((s) => {
      console.log(s, "prev");
      return { count: s.count + 1 };
    });
  };
  minusCount = () => {
    this.setState((s) => {
      console.log(s, "prev");
      return { count: s.count - 1 };
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <button
          className="+"
          onClick={() => {
            this.addCount();
          }}
        >
          +
        </button>
        <p>{this.state.count}</p>
        <button
          className="-"
          onClick={() => {
            this.minusCount();
          }}
          disabled={this.state.count === 0}
        >
          -
        </button>
      </div>
    );
  }
}

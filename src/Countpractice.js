import React, { useState } from "react";

const Count = () => {
  const [props, setProps] = useState({ count: 0 });
  const addCount = () => {
    console.log("aa");
    setProps((s) => {
      console.log(s, "prev");
      return { count: s.count + 1 };
    });
  };
  const minusCount = () => {
    setProps((s) => {
      console.log(s, "prev");
      return { count: s.count - 1 };
    });
  };
  return (
    <div>
      <button
        className="+"
        onClick={() => {
          addCount();
        }}
      >
        +
      </button>
      <p>{props.count}</p>
      <button
        className="-"
        onClick={() => {
          minusCount();
        }}
        disabled={props.count === 0}
      >
        -
      </button>
    </div>
  );
};
export default Count;

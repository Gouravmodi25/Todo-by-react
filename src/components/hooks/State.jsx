import { useState } from "react";
import "./State.css";
export const State = () => {
  const [value, setValue] = useState(0);

  const HandleIncrement = () => {
    setValue((p) => p + 1);
    // console.log("prev", prev);
  };
  function HandleReset() {
    setValue(0);
  }
  function HandleDecrement() {
    setValue(value - 1);
  }
  console.log("Parent Component Rendered");
  console.log(value);
  return (
    <>
      <section className="state">
        <div>
          <h1>{value}</h1>
        </div>
        <div className="btn">
          <button onClick={HandleDecrement}> Decrement</button>
          <button onClick={HandleReset}> Reset</button>
          <button onClick={HandleIncrement}> Increment</button>
        </div>
        <ChildComponent count={value} />
      </section>
    </>
  );
};

const ChildComponent = (props) => {
  console.log("Child component rendered");
  return <h1>Child Component : {props.count}</h1>;
};

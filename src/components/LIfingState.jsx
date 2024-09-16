import { useState } from "react";

const LiftState = () => {
  const [inputValue, setInput] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInput={setInput} />
      <DisplayComponent inputValue={inputValue} setInput={setInput} />
    </>
  );
};

const InputComponent = ({ inputValue, setInput }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};
const DisplayComponent = ({ inputValue }) => {
  return (
    <>
      <h1>The Output is:{inputValue}</h1>
    </>
  );
};

export default LiftState;

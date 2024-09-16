import { useState } from "react";

const TodoForm = ({ handleFormEvent }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInput = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleFormEvent(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <input
            type="text"
            autoComplete="off"
            className="todo-input"
            value={inputValue.content}
            onChange={(e) => {
              handleInput(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add-Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;

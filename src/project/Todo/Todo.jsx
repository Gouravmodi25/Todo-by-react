import { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getTodo, setTodo } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getTodo());

  const handleFormEvent = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const todoContent = task.find((currTask) => {
      return currTask.content === content;
    });

    if (todoContent) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  setTodo(task);

  function handleDeleteBtn(value) {
    const updateTask = task.filter((currTask) => currTask.content !== value);
    setTask(updateTask);
  }

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content == content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  function handleClearBtn() {
    setTask([]);
  }

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm handleFormEvent={handleFormEvent} />
      <section className="myUnOrdList ">
        <ul>
          {task.map((currELem) => {
            return (
              <TodoList
                key={currELem.id}
                data={currELem.content}
                checked={currELem.checked}
                OnDelete={handleDeleteBtn}
                OnChecked={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearBtn}>
        Clear All
      </section>
    </section>
  );
};

const todokey = "react-todo";

export const getTodo = () => {
  return JSON.parse(localStorage.getItem(todokey)) || [];
};

export const setTodo = (task) => {
  return localStorage.setItem(todokey, JSON.stringify(task));
};

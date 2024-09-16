import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ data, checked, OnDelete, OnChecked }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => OnChecked(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => OnDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;

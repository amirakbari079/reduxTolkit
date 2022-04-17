import { useDispatch, useSelector } from "react-redux";
import { toggleTodos } from "../../features/todos/todosSlice";
import "./style.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <>
      <ul className="todoList">
        {todos.map((todo) => (
          <TodoItem key={todo.id}  {...todo}/>
        ))}
      </ul>
      <div className="footer">
        <span>
          You have <span className="pendingTasks"></span> pending tasks
        </span>
        <button>Clear All</button>
      </div>
    </>
  );
};

export default TodoList;

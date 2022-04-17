import { useDispatch } from "react-redux";
import { deleteTodos, toggleTodos } from "../../features/todos/todosSlice";

const TodoItem = ({id,title,completed}) => {
  const dispatch = useDispatch();
// console.log(id)
  return (
    <>
      <li className={completed && "activeTodo"} >
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) => dispatch(toggleTodos({ id }))}
        />
        {title}
        <span className="icon" onClick={()=>dispatch(deleteTodos({id}))}>
          <i>X</i>
        </span>
      </li>
    </>
  );
};

export default TodoItem;

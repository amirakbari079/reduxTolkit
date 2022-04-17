import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";
import "./style.css";
const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault()
    console.log("aaa")
    dispatch(addTodo({title:value}))
  };
  return (
    <>
      <header>Todo App</header>
     <form onSubmit={onSubmit}>
     <div className="inputField">
        <input
          type="text"
          placeholder="Add your new todo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" >
          <span>+</span>
        </button>
        {/* <input type="submit" className="btn"/> */}
      </div>
     </form>
    </>
  );
};

export default AddTodo;

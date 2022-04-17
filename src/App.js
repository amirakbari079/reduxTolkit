import logo from "./logo.svg";
import "./App.css";
import { Provider } from 'react-redux'
import CounterComponent from "./components/CounterComponent";
import { store } from "./features/store";
import AddTodo from "./components/Todos/AddTodo";
import TodoList from "./components/Todos/TodoList";
import "./components/Todos/style.css"
function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <AddTodo/>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;

import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodos: (state, action) => {
      const selectedTodo = state.todos.find((t) => t.id == action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodos: (state, action) => {
      const filterTodo = state.todos.filter((t) => t.id != action.payload.id);
      state.todos = filterTodo;
    },
  },
});
export const { addTodo, toggleTodos,deleteTodos} = todosSlice.actions;
export default todosSlice.reducer;

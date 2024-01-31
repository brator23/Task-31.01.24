import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        name: action.payload.name,
        phone: action.payload.phone,
        id: Date.now(),
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo(state, action) {
      const { id, newTitle } = action.payload;
      const editedTodo = state.todos.find((elem) => elem.id === id);
      editedTodo.title = newTitle;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
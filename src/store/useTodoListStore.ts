import { create } from "zustand";

interface Todo {
  id: string;
  text: string;
  isEditing: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  submitEdit: (id: string, text: string) => void;
  cancelEdit: () => void;
}

export const useTodoListStore = create<TodoState>((set) => ({
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  addTodo: (
    todo: Todo // 함수 구현 변경
  ) =>
    set((state) => {
      const newTodos = [...state.todos, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),
  deleteTodo: (id: string) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  startEditing: (id: string) =>
    set((state) => {
      const newTodos = state.todos.map((todo) => (todo.id === id ? { ...todo, isEditing: true } : todo));
      return { todos: newTodos };
    }),

  submitEdit: (id: string, text: string) =>
    set((state) => {
      const newTodos = state.todos.map((todo) => (todo.id === id ? { ...todo, text, isEditing: false } : todo));
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  cancelEdit: () =>
    set((state) => {
      const newTodos = state.todos.map((todo) => ({ ...todo, isEditing: false }));
      return { todos: newTodos };
    }),
}));

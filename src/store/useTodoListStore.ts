// src/store/useTodoStore.ts
import { create } from "zustand";

interface Todo {
  id: string;
  text: string;
  isEditing: boolean;
}

// interface TodoState {
//   todos: Todo[];
//   addTodo: (todo: Todo) => void; // 여기를 수정: 인자 타입을 'string'에서 'Todo' 객체로 변경
//   // addTodo: (text: string) => void;
//   deleteTodo: (index: number) => void;
//   startEditing: (index: number, text: string) => void;
//   submitEdit: (index: number, text: string) => void;
//   cancelEdit: () => void;
// }

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  // submitEdit: (id: string, text: string) => void;
  submitEdit: (id: string, text: string) => void;
  cancelEdit: () => void;
}

export const useTodoListStore = create<TodoState>((set) => ({
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  addTodo: (
    todo: Todo // 함수 구현 변경
  ) =>
    // addTodo: (text: string) =>
    set((state) => {
      // const newTodos = [...state.todos, { text, isEditing: false }];
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
  // startEditing: (id: string) =>
  //   set({ todos: get().todos.map(todo => todo.id === id ? { ...todo, isEditing: true } : todo)) }),
  startEditing: (id: string) =>
    set((state) => {
      const newTodos = state.todos.map((todo) => (todo.id === id ? { ...todo, isEditing: true } : todo));
      return { todos: newTodos };
    }),
  // submitEdit: (id: string, text: string) =>
  //   set((state) => {
  //     const newTodos = state.todos.map((todo, i) => (i === id ? { ...todo, text, isEditing: false } : todo));
  //     localStorage.setItem("todos", JSON.stringify(newTodos));
  //     return { todos: newTodos };
  //   }),
  // cancelEdit: () => set({ todos: get().todos.map((todo) => ({ ...todo, isEditing: false })) }),
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

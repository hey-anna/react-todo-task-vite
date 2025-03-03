// src/components/TodoList.tsx
import { useEffect } from "react";
import { useTodoListStore } from "../store/useTodoListStore.ts";
import { TodoListContainer, Title } from "../components/styled/styledTodo/StyledTodo";
import TodoInput from "../components/input/todoInput.tsx";
import TodoList from "../components/list/TodoList.tsx";
import { generateId } from "../utils/generateId";

const TodoPage = () => {
  // const { todos, addTodo, deleteTodo, startEditing, submitEdit, cancelEdit } = useTodoSListtore();
  const { todos, addTodo, deleteTodo, startEditing, submitEdit } = useTodoListStore();

  // const handleAddTodo = (text: string) => {
  //   addTodo({
  //     id: generateId(),
  //     text,
  //     isEditing: false,
  //   });
  // };
  //
  // const handleAddTodo = (text: string) => {
  //   const trimmedText = text.trim();
  //   if (!trimmedText) return; // 빈 문자열이면 추가 안함

  //   const newTodo = {
  //     id: generateId(), // 올바른 id 생성
  //     text: trimmedText, // 문자열만 저장되도록 변경
  //     isEditing: false,
  //   };
  //   addTodo(newTodo);
  // };
  const handleAddTodo = (text: string) => {
    console.log("입력된 text 값:", text); // 🔍 로그 추가
    const trimmedText = text.trim();
    if (!trimmedText) return; // 빈 문자열 방지

    const newTodo = {
      id: generateId(),
      text: trimmedText, // 문자열만 저장됨
      isEditing: false,
    };
    console.log("추가될 newTodo 객체:", newTodo); // 🔍 로그 추가
    addTodo(newTodo);
  };

  // const handleClearLocalStorage = () => {
  //   localStorage.removeItem("todos");
  //   console.log(" 로컬 스토리지 todos 삭제 완료!");
  //   window.location.reload(); // 새로고침하여 적용
  // };

  // 앱 처음 로드될 때 로컬 스토리지 초기화 (한 번 실행)
  useEffect(() => {
    console.log("🚨 로컬 스토리지 삭제: todos 초기화");
    localStorage.removeItem("todos");
  }, []);

  //
  // const handleAddTodo = (text: string) => {
  //   const newTodo = {
  //     id: generateId(),
  //     text,
  //     isEditing: false,
  //   };
  //   addTodo(newTodo);
  // };
  console.log("Rendering todos:", todos);
  return (
    <TodoListContainer>
      <Title>TodoList</Title>
      {/* <button onClick={handleClearLocalStorage}>🗑 로컬 스토리지 초기화</button> */}

      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onEdit={startEditing} onDelete={deleteTodo} onToggleEdit={submitEdit} />
    </TodoListContainer>
  );
};

export default TodoPage;

// src/components/input/TodoInput.tsx
import { useState } from "react";
import { Input, Button } from "../styled/styledTodo/StyledTodo";
import { INITIAL_TODO_TEXT } from "../../constants/todoConstants";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

  // 입력 처리 함수, 유효한 입력값이면 onAddTodo를 호출하고 입력을 초기화
  // const handleAdd = () => {
  //   const trimmedInput = input.trim();
  //   if (trimmedInput) {
  //     onAddTodo(trimmedInput);
  //     setInput("");
  //   }
  // };
  // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     handleAdd(); // 엔터 키를 누를 때 handleAdd를 호출
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value); // 사용자 입력을 input 상태에 반영
  // };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onAddTodo(input);
      setInput("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex gap-1 mb-4">
      <Input
        type="text"
        placeholder={INITIAL_TODO_TEXT}
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        // onClick={handleAdd}
        onClick={() => {
          onAddTodo(input);
          setInput("");
        }}
      >
        추가
      </Button>
    </div>
  );
};

export default TodoInput;

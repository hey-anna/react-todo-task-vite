// src/components/input/TodoInput.tsx
import { useState } from "react";
import { Input, Button } from "../styled/styledTodo/StyledTodo";
import { INITIAL_TODO_TEXT } from "../../constants/todoConstants";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

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

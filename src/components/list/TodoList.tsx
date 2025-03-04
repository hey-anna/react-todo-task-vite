import { List, ListItem, Button } from "../styled/styledTodo/StyledTodo";

interface Todo {
  id: string;
  text: string;
  isEditing: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onToggleEdit: (id: string, text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete, onToggleEdit }) => {
  console.log("현재 todos 상태:", todos);
  todos.forEach((todo, index) => {
    console.log(`todo[${index}] 전체 객체:`, todo);
    console.log(`todo[${index}].text (타입 확인):`, typeof todo.text, todo.text);
  });

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {todo.isEditing ? (
            <input
              type="text"
              value={typeof todo.text === "string" ? todo.text : ""} // text가 문자열일 때만 사용
              onChange={(e) => onEdit(todo.id, e.target.value)}
            />
          ) : (
            <span>{todo.text}</span>
          )}
          <div className="flex gap-1">
            {todo.isEditing ? (
              <>
                <Button onClick={() => onToggleEdit(todo.id, todo.text)}>저장</Button>
                <Button onClick={() => onDelete(todo.id)}>취소</Button>
              </>
            ) : (
              <>
                <Button onClick={() => onToggleEdit(todo.id, todo.text)}>수정</Button>
                <Button onClick={() => onDelete(todo.id)}>삭제</Button>
              </>
            )}
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;

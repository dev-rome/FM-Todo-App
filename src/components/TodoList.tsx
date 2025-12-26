import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  removeTodos,
  toggleTodos,
}: TodoListProps) {
  return (
    <ul>
      {todos.map(({ id, task, isCompleted }) => (
        <TodoItem
          key={id}
          title={task}
          checked={isCompleted}
          onDelete={() => removeTodos(id)}
          onToggleChange={() => toggleTodos(id)}
        />
      ))}
    </ul>
  );
}

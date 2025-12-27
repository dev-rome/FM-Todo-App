import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  removeTodos,
  toggleTodos,
}: TodoListProps) {
  return (
    <article className="mt-4 rounded-[5px] bg-(--list-background) shadow-(--list-box-shadow) md:mt-6">
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
    </article>
  );
}

import { useState } from "react";
import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function TodoList({
  todos,
  removeTodos,
  toggleTodos,
}: TodoListProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.isCompleted).length;

  const handleClearCompleted = () => {
    const completedIds = todos
      .filter((todo) => todo.isCompleted)
      .map((todo) => todo.id);
    completedIds.forEach((id) => removeTodos(id));
  };

  return (
    <>
      <article className="mt-4 rounded-[5px] bg-(--list-background) shadow-(--list-box-shadow) md:mt-6">
        <ul>
          {filteredTodos.map(({ id, task, isCompleted }) => (
            <TodoItem
              key={id}
              title={task}
              checked={isCompleted}
              onDelete={() => removeTodos(id)}
              onToggleChange={() => toggleTodos(id)}
            />
          ))}
        </ul>
        {todos.length > 0 && (
          <div className="flex justify-between p-6">
            <p className="text-xs text-(--footer-text) md:text-sm">
              <span>{activeTodosCount}</span> items left
            </p>
            <div className="hidden md:flex md:gap-4">
              <FilterButtons filter={filter} onFilterChange={setFilter} />
            </div>
            <button className="footer-button" onClick={handleClearCompleted}>
              Clear Completed
            </button>
          </div>
        )}
      </article>
      {todos.length > 0 && (
        <div className="mt-4 flex justify-center gap-4 rounded-[5px] bg-(--list-background) py-5 shadow-(--list-box-shadow) md:hidden">
          <FilterButtons filter={filter} onFilterChange={setFilter} />
        </div>
      )}
    </>
  );
}

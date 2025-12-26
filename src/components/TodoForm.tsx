import { useState } from "react";
import type { TodoFormProps } from "../types";

export default function TodoForm({ addTodos }: TodoFormProps) {
  const [todoTask, setTodoTask] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoTask.trim()) {
      addTodos(todoTask.trim());
      setTodoTask("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTask(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        placeholder="Create a new todo..."
        value={todoTask}
        onChange={handleInputChange}
      />
    </form>
  );
}

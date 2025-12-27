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
    <form className="mt-10 md:mt-12" onSubmit={handleFormSubmit}>
      <input
        className="w-full rounded-[5px] bg-(--form-background) py-3.5 pl-6 text-xs text-(--input-text-color) placeholder:text-xs placeholder:text-gray-600 md:text-lg md:placeholder:text-lg"
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

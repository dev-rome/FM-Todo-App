import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TodoItems } from "./types";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<TodoItems[]>([]);

  const addTodo = (task: string) => {
    const newTodo: TodoItems = {
      id: uuidv4(),
      task,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodoCompletion = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <main>
        <div>
          <TodoForm />
        </div>
      </main>
    </>
  );
}

export default App;

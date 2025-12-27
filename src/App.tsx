import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TodoItems } from "./types";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

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
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <div className="bg-hero absolute -z-10 h-[200px] w-full bg-cover bg-no-repeat md:h-[300px]"></div>
      <Header />
      <div className="mx-auto max-w-[540px] px-6">
        <TodoForm addTodos={addTodo} />
        <TodoList
          todos={todos}
          toggleTodos={toggleTodoCompletion}
          removeTodos={removeTodo}
        />
      </div>
    </main>
  );
}

export default App;

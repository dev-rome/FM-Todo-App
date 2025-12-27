import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TodoItems } from "./types";
import DesktopDarkImage from "./assets/images/bg-desktop-dark.jpg";
import DesktopLightImage from "./assets/images/bg-desktop-light.jpg";
import MobileDarkImage from "./assets/images/bg-mobile-dark.jpg";
import MobileLightImage from "./assets/images/bg-mobile-light.jpg";
import BackgroundImage from "./components/BackgroundImage";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState<TodoItems[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <BackgroundImage
        mobileLight={MobileLightImage}
        desktopLight={DesktopLightImage}
        mobileDark={MobileDarkImage}
        desktopDark={DesktopDarkImage}
        className="h-[200px] md:h-[300px]"
      />
      <Header />
      <div className="mx-auto max-w-[540px] px-6">
        <TodoForm addTodos={addTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          toggleTodos={toggleTodoCompletion}
          removeTodos={removeTodo}
        />
      </div>
      {todos.length > 0 && (
        <p className="mt-10 text-center text-sm text-(--footer-text) md:mt-6">
          Drag and drop to reorder list
        </p>
      )}
    </main>
  );
}

export default App;

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
export interface TodoItems {
  id: string;
  task: string;
  isCompleted: boolean;
}
export interface TodoFormProps {
  addTodos: (todoTask: string) => void;
}
export interface TodoListProps {
  todos: TodoItems[];
  toggleTodos: (id: string) => void;
  removeTodos: (id: string) => void;
}
export interface TodoItemProps {
  title: string;
  checked: boolean;
  onToggleChange: () => void;
  onDelete: () => void;
}

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
  setTodos: React.Dispatch<React.SetStateAction<TodoItems[]>>;
  toggleTodos: (id: string) => void;
  removeTodos: (id: string) => void;
}

export interface TodoItemProps {
  id: string;
  title: string;
  checked: boolean;
  onDelete: () => void;
  onToggleChange: () => void;
}

export interface FilterButtonsProps {
  filter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

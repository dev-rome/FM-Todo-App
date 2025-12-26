export interface TodoItems {
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

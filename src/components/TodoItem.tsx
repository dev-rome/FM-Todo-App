import type { TodoItemProps } from "../types";

export default function TodoItem({
  title,
  checked,
  onDelete,
  onToggleChange,
}: TodoItemProps) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={checked} onChange={onToggleChange} />
        {title}
      </label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

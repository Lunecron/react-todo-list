import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onHoverChange: (id: number, completed: boolean) => void;
  isHovered: boolean;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
  onHoverChange,
  isHovered,
}: TodoItemProps) {
  return (
    <div className="relative flex w-full items-center justify-between gap-2">
      <label
        className={`relative flex-grow items-center truncate rounded-md border border-gray-700 bg-white p-2 ${isHovered ? "bg-slate-200" : "border-gray-700"}`}
        onMouseEnter={() => onHoverChange(todo.id, true)}
        onMouseLeave={() => onHoverChange(todo.id, false)}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className=" mr-2 flex-initial scale-125"
        />
        <span
          className={
            todo.completed
              ? " flex-1 text-lg text-gray-400 line-through "
              : "flex-1 text-lg"
          }
        >
          {todo.title}
        </span>
        <button
          className={`absolute end-0 flex-none border border-gray-700 bg-red-950 pl-1 transition-transform duration-300 ease-in-out hover:bg-red-600`}
          style={{
            transform: isHovered
              ? "translateX(10%) translateY(-20%) "
              : "translateX(110%) translateY(-20%)",
            width: "10%",
            height: "110%",
            pointerEvents: isHovered ? "auto" : "none",
          }}
          onClick={() => onDelete(todo.id)}
        >
          <Trash2 size={30} className="text-white hover:cursor-pointer" />
        </button>
      </label>
    </div>
  );
}

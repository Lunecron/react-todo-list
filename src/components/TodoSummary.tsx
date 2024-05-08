import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="mx-auto max-w-lg items-center space-y-2 rounded-md bg-slate-100 text-center">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-sm font-medium text-red-800 hover:text-red-600 hover:underline"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}

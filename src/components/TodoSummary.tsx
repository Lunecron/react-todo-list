import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}


export default function TodoSummary({todos,deleteAllCompleted} : TodoSummaryProps) {

    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="items-center text-center space-y-2 max-w-lg mx-auto bg-slate-100 rounded-md">
            <p className="text-sm font-medium">
                    {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (

                <button onClick={deleteAllCompleted} className="text-red-800 text-sm font-medium hover:underline hover:text-red-600">
                    Delete all completed
                </button>
            )}
        </div>
    )
}
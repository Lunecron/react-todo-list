import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
    todos,
  } = useTodos();

  return (
    <main className="h-screen space-y-5 overflow-y-auto py-10">
      <h1 className="mx-auto max-w-lg space-y-6 rounded-md bg-slate-100 text-center text-3xl font-bold">
        TODO List
      </h1>
      <div className="mx-auto max-w-lg space-y-6 rounded-md bg-slate-100 p-5  ">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  );
}

export default App;

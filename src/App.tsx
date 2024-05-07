import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';

function App() {

  const {addTodo , setTodoCompleted ,deleteTodo , deleteAllCompletedTodos , todos} = useTodos();



  return (
      <main className='py-10 h-screen space-y-5 overflow-y-auto'>
        <h1 className='font-bold text-3xl text-center max-w-lg mx-auto bg-slate-100 rounded-md space-y-6'>TODO List</h1>
        <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
          <AddTodoForm onSubmit={addTodo}/>
          <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
        </div>
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>

      </main>
  )
}

export default App

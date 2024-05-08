import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]",
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  const [nextId, setNextId] = useState<number>(dummyData.length + 1);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: nextId,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
    setNextId(nextId + 1);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}

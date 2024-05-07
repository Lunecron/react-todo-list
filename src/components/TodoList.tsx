import { useState } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id:number , completed: boolean) => void;
    onDelete : (id:number) => void;
}

export default function TodoList({todos, onCompletedChange,onDelete} : TodoListProps) {

    const [hoveredId , setHoveredId] = useState<null |number>(null);

    const handleHoverChange = (id:number, isHovered:boolean) => {
        if (isHovered) {
            setHoveredId(id);
        } else if (hoveredId === id) {
            setHoveredId(null);
        }
    };

    const todosSorted = todos.sort(
        (a : Todo,b:Todo) => { 
            if(a.completed === b.completed){
                 return b.id - a.id 
            }
            return a.completed ? 1: -1
        }
    )

    return(
        <>
            <div className='space-y-2 '>
            {todosSorted.map(todo => (
            <TodoItem key= {todo.id} todo={todo} onCompletedChange={onCompletedChange} onDelete={onDelete} isHovered={hoveredId === todo.id} onHoverChange={handleHoverChange}/>
            ))}
            </div>
            {todos.length === 0 && (<p> No todos yet. Add a new one above.</p>)}
        </>
    
    )
}
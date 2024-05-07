import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;   
    onCompletedChange: (id:number , completed: boolean) => void;
    onDelete: (id: number) => void;
    onHoverChange: (id: number, completed:boolean)=> void;
    isHovered: boolean;
    
}


export default function TodoItem({ todo, onCompletedChange, onDelete, onHoverChange, isHovered } : TodoItemProps) {
    return (
        <div className="relative flex items-center gap-2 justify-between w-full">
            <label className={`flex-grow relative truncate items-center border rounded-md p-2 border-gray-700 bg-white ${isHovered ? 'bg-slate-200' : 'border-gray-700'}`} 
                onMouseEnter={() => onHoverChange(todo.id, true)}
                onMouseLeave={() => onHoverChange(todo.id, false)}
            >
                <input type="checkbox" checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} className=" flex-initial scale-125 mr-2"/>
                <span className={todo.completed ? " flex-1 text-lg line-through text-gray-400 " : "flex-1 text-lg"}>
                    {todo.title}
                </span>
                <button className={`absolute border border-gray-700 flex-none transition-transform duration-300 end-0 ease-in-out bg-red-950 hover:bg-red-600 pl-1`} style={{
                    transform: isHovered ? 'translateX(10%) translateY(-20%) ' : 'translateX(110%) translateY(-20%)', width: '10%' , height: '110%',
                    pointerEvents: isHovered ? 'auto' : 'none'
                }} onClick={() => onDelete(todo.id)}><Trash2 size={30} className="text-white hover:cursor-pointer"/></button>
            </label>
        </div>
    );
}